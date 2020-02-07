import * as React from 'react';

export interface WithDataProps {
    data?: any;
    fetchData?: any;
}

export function withData(
  WrappedComponent: any,
  fetchData: any
) {
  return class extends React.Component {
      state = {
          isLoading: false,
      };

      // componentDidMount() {
      //     this.fetchData();
      // }

      fetchData = (data: string[]) => {
          this.setState(
              {isLoading: true, fetchedData: []},
              () =>
                  fetchData(data)
                      .then(
                          this.onFetchSuccess,
                          this.onFetchFailure
                      )
          );
      };

      onFetchSuccess = ({data}: any) => {
          const fetchedData = (data || []);

          this.setState({fetchedData, isLoading: false});
      };

      onFetchFailure = () => {
          this.setState({
              isLoading: false,
              error: true,
          });
      };

      render() {
          return <WrappedComponent
              {...this.props}
              data={this.state}
              fetchData={this.fetchData}
          />
      }
  }
}
