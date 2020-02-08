import React from 'react';
import {withHelmet} from "../HOCs/withHelmet";
import SearchTabForm from "../components/SearchTab/SearchTabFormContainer";
import {withData, WithDataProps} from "../HOCs/withData";
import {MainLayout} from "../layouts/MainLayout";
import {fetchSongs} from "../services/Api";
import {DefaultFetchRenderer} from "../components/DefaultFetchRenderer";
import {TabList} from "../components/SearchTab/TabList";
import {Pagination} from "../wrappers/Pagination";


const MainPageBase = ({data, fetchData}: WithDataProps) => (
    <React.Fragment>
        <MainLayout
            form={
                <SearchTabForm
                    fetchData={fetchData}
                />
            }
            content={
                <div
                    className={'page-content'}
                >
                    <DefaultFetchRenderer
                        data={data}
                        component={
                            <Pagination
                                data={data.fetchedData}
                                itemsPerPage={16}
                            >
                                <TabList/>
                            </Pagination>
                        }
                    />
                </div>
            }
        />
    </React.Fragment>
);


export const MainPageWithHelmet = withHelmet(MainPageBase);
export const MainPage = withData(MainPageWithHelmet, fetchSongs);

