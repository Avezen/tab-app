import React from 'react';
import {withHelmet} from "../HOCs/withHelmet";
import SearchRecipeForm from "../components/SearchRecipe/SearchRecipeFormContainer";
import {withData, WithDataProps} from "../HOCs/withData";
import {fetchRecipes} from "../services/RecipeService";
import {SearchRecipeList} from "../components/SearchRecipe/SearchRecipeList";
import {MainLayout} from "../layouts/MainLayout";
import {FormattedMessage} from "react-intl";

const MainPageBase = ({data, fetchData}: WithDataProps) => (
    <React.Fragment>
        <MainLayout
            form={
                <SearchRecipeForm
                    fetchData={fetchData}
                />
            }
            content={
                !data.fetchedData ? (
                    <React.Fragment/>
                ) : data.isLoading ? (
                    <div>
                        Loading...
                    </div>
                ) : data.error ? (
                    <div>
                        <FormattedMessage id="mainPage.fetchingError"/>
                    </div>
                ) : data.fetchedData.length > 0 ? (
                    <SearchRecipeList
                        fetchData={fetchData}
                        data={data.fetchedData}
                    />
                ) : (
                    <div>
                        <FormattedMessage id="mainPage.notFound"/>
                    </div>
                )
            }
        />
    </React.Fragment>
);


export const MainPageWithHelmet = withHelmet(MainPageBase);
export const MainPage = withData(MainPageWithHelmet, fetchRecipes);

