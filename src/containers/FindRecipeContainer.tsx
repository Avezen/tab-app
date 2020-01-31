import React, {ChangeEvent, useState} from "react";
import {withData, WithDataProps} from "../HOCs/withData";
import {fetchRecipes} from "../services/RecipeService";
import Dropdown from "../components/Dropdown/DropdownContainer";



const FindRecipeContainer = ({data, fetchData}: WithDataProps) => {
    const [inputItems, setInputItems] = useState(['']);

    const addIngredients = (e: ChangeEvent<HTMLInputElement>) => {
        let inputItems = e.target.value.replace(/\s/g, '').split(',');

        setInputItems(inputItems);
    };

    console.log(data);

    return (
        <div>
            <input
                type={'text'}
                value={inputItems}
                onChange={addIngredients}
            />
            <br/>
            <Dropdown
                inputItems={inputItems}
                setInputItems={setInputItems}
            />
            <button
                onClick={() => fetchData(inputItems.filter((item: any) => item !== ''))}
            >
                search
            </button>


        </div>
    )
};


export default withData(
    FindRecipeContainer,
    fetchRecipes
);
