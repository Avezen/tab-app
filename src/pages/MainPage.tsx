import React from 'react';
import {FormattedMessage} from "react-intl";
import {withHelmet} from "../HOCs/withHelmet";
import FindRecipe from "../containers/FindRecipeContainer";

const MainPageBase = () => {

    return (
        <div>
            <h1>
                <FormattedMessage id="mainPage.pageTitle"/>
            </h1>
            <FindRecipe />
        </div>
    );
};


export const MainPage = withHelmet(MainPageBase);

