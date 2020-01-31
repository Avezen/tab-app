import React from "react"
import Dropdown from "../Dropdown/DropdownContainer";

interface SearchRecipeFormProps {
    inputItems: string[];
    setInputItems: any;
    updateInputItems: any;
    fetchData: any;
}

export const SearchRecipeForm = ({inputItems, setInputItems, updateInputItems, fetchData}: SearchRecipeFormProps) => {
    return (
        <div
            className={'search-recipe-form'}
        >
            <input
                type={'text'}
                className={'search-recipe-form__input'}
                placeholder={'onions,pepperoni'}
                value={inputItems}
                onChange={updateInputItems}
            />
            <br/>
            <Dropdown
                inputItems={inputItems}
                setInputItems={setInputItems}
            />
            <button
                onClick={() => fetchData(inputItems.filter((item: string) => item !== ''))}
            >
                search
            </button>
        </div>
    );
};