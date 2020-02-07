import React from 'react';
import {withHelmet} from "../HOCs/withHelmet";
import SearchTabForm from "../components/SearchTab/SearchTabFormContainer";
import {withData, WithDataProps} from "../HOCs/withData";
import {TabList} from "../components/SearchTab/TabList";
import {MainLayout} from "../layouts/MainLayout";
import {FormattedMessage} from "react-intl";
import {fetchSongs} from "../services/Api";
import {Pagination} from "../wrappers/Pagination";
import loader from "../assets/images/loader.svg"

const MainPageBase = ({data, fetchData}: WithDataProps) => (
    <React.Fragment>
        <MainLayout
            form={
                <SearchTabForm
                    fetchData={fetchData}
                />
            }
            content={
                !data.fetchedData ? (
                    <React.Fragment/>
                ) : data.isLoading ? (
                    <div
                        className={'fetch-info'}
                    >
                        <img
                            src={loader}
                            alt={'loader'}
                            width={30}
                        />
                    </div>
                ) : data.error ? (
                    <div
                        className={'fetch-info'}
                    >
                        <FormattedMessage id="mainPage.fetchingError"/>
                    </div>
                ) : data.fetchedData.length > 0 ? (
                    <Pagination
                        data={data.fetchedData}
                        itemsPerPage={16}
                    >
                        <TabList />
                    </Pagination>
                ) : (
                    <div
                        className={'fetch-info'}
                    >
                        <FormattedMessage id="mainPage.notFound"/>
                    </div>
                )
            }
        />
    </React.Fragment>
);


export const MainPageWithHelmet = withHelmet(MainPageBase);
export const MainPage = withData(MainPageWithHelmet, fetchSongs);

