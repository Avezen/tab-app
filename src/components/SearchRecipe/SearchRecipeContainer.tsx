import React, {ChangeEvent, useState} from "react";
import {withData, WithDataProps} from "../../HOCs/withData";
import {fetchRecipes} from "../../services/RecipeService";
import {SearchRecipeForm} from "./SearchRecipeForm";
import {SearchRecipeList} from "./SearchRecipeList";


const SearchRecipeContainer = ({data, fetchData}: WithDataProps) => {
    const [inputItems, setInputItems] = useState(['']);

    const updateInputItems = (e: ChangeEvent<HTMLInputElement>) => {
        let inputItems = e.target.value.replace(/\s/g, '').split(',');

        setInputItems(inputItems);
    };

    const fetchDataAndClearInput = (data: string[]) => {
        fetchData(data);
        setInputItems(inputItems.filter((item: string) => item !== ''));
    };

    return (
        <div>
            <SearchRecipeForm
                inputItems={inputItems}
                setInputItems={setInputItems}
                updateInputItems={updateInputItems}
                fetchData={fetchDataAndClearInput}
            />

            {!data.fetchedData ? (
                <React.Fragment />
            ): data.isLoading ? (
                <div>
                    Loading...
                </div>
            ) : data.error ? (
                <div>
                    Error while fetching data
                </div>
            ) : data.fetchedData.length > 0 ? (
                <SearchRecipeList
                    setInputItems={setInputItems}
                    fetchData={fetchData}
                    data={data}
                />
            ) : (
                <div>
                    Not found
                </div>
            )}

        </div>
    )
};


export default withData(
    SearchRecipeContainer,
    fetchRecipes
);
