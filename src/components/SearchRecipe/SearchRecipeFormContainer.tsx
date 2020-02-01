import React, {ChangeEvent, useState} from "react";
import {SearchRecipeForm} from "./SearchRecipeForm";
import {useScroll} from "../../hooks/useScroll";

interface SearchRecipeFormContainerProps {
    fetchData: any;
}

let prevScrollY: any = 0;

const SearchRecipeFormContainer = ({fetchData}: SearchRecipeFormContainerProps) => {
    const [inputItems, setInputItems] = useState(['']);
    const scroll = useScroll();

    let closedForm = false;
    if(scroll.scrollY > prevScrollY){
        closedForm = true;
    }
    prevScrollY = scroll.scrollY;

    const updateInputItems = (e: ChangeEvent<HTMLInputElement>) => {
        let inputItems = e.target.value.replace(/\s/g, '').split(',');

        setInputItems(inputItems);
    };

    const fetchDataAndClearInput = (data: string[]) => {
        fetchData(data);
        setInputItems(inputItems.filter((item: string) => item !== ''));
    };

    return (
        <SearchRecipeForm
            inputItems={inputItems}
            setInputItems={setInputItems}
            updateInputItems={updateInputItems}
            fetchData={fetchDataAndClearInput}
            closedForm={closedForm}
        />
    )
};


export default SearchRecipeFormContainer;
