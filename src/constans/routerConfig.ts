import {PUBLIC_ROUTES} from './routes';
import {MainPage} from '../pages/MainPage';
import {ComponentType} from 'react';
import {WithHelmetProps} from '../HOCs/withHelmet';

export interface IRoute {
    path: string;
    Component: ComponentType<any & WithHelmetProps>;
    messagePrefix: string;
    exact?: boolean;
}


export const GLOBAL_ROUTES: IRoute[] = [
    {
        Component: MainPage,
        messagePrefix: 'mainPage',
        path: `/${PUBLIC_ROUTES.MAIN}`,
    }
];

