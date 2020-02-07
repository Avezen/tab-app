import React, {ChangeEvent, createRef, useState} from "react";
import {SearchTabForm} from "./SearchTabForm";

interface SearchRecipeFormContainerProps {
    fetchData: any;
}


const SearchTabFormContainer = ({fetchData}: SearchRecipeFormContainerProps) => {
    const [inputItem, setInputItem] = useState('');
    const input= createRef<HTMLInputElement>();


    const updateInputItems = (e: ChangeEvent<HTMLInputElement>) => {
        let inputItem = e.target.value;

        setInputItem(inputItem);
    };

    const validateAndFocusInput = (data: string) => {
      if(data.length === 0 && input.current){
          input.current.focus();
          return false;
      }

      return true;
    };

    const onEnterOrOnClick = (data: string) => (e: any) => {
        if(validateAndFocusInput(data)){
            switch (e.type) {
                case 'keydown':
                    if (e.key === 'Enter') {
                        fetchData(data);
                    }
                    break;
                case 'click':
                    fetchData(data);
                    break;
            }
        }
    };

    const fetchDataAndClearInput = (data: string[]) => {
        fetchData(data);
        setInputItem('');
    };

    return (
        <SearchTabForm
            inputItem={inputItem}
            setInputItem={setInputItem}
            updateInputItems={updateInputItems}
            fetchData={onEnterOrOnClick}
            inputRef={input}
        />
    )
};


export default SearchTabFormContainer;
