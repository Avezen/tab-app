import React, {Component} from 'react';
import {IntlProvider} from "react-intl";
// @ts-ignore
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {GLOBAL_ROUTES} from "./constans/routerConfig";
import {flattenMessages} from "./helpers/flattenMessages";
import {messages} from "./constans/messages";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    public render() {
        const routeComponents = GLOBAL_ROUTES.map(
            ({Component, path, ...props}, key) =>
                <Route
                    key={key}
                    exact
                    path={path}
                    render={(routerProps: any) => <Component {...props} {...routerProps}/>}
                />
        );

        return (
            <IntlProvider locale="en" messages={flattenMessages(messages['en'])}>
                <Router>
                    <Switch>
                        {routeComponents}
                    </Switch>
                </Router>
            </IntlProvider>
        );
    }
}

export default (App);
