import React from "react"
import {useIntl} from "react-intl";
import {DefaultInput} from "../common/DefaultInput";
import {DefaultButton} from "../common/DefaultButton";

interface SearchRecipeFormProps {
    inputItem: string;
    setInputItem: any;
    updateInputItems: any;
    fetchData: any;
    inputRef: any;
}

export const SearchTabForm = ({inputItem, setInputItem, updateInputItems, fetchData, inputRef}: SearchRecipeFormProps) => {
    const intl = useIntl();

    return (
        <div
            className={`search-tab-form`}
        >
            <div
                className={'search-tab-form__input'}
            >
                <DefaultInput
                    inputRef={inputRef}
                    type={'text'}
                    placeholder={intl.formatMessage({id: 'mainPage.inputPlaceholder'})}
                    value={inputItem}
                    onKeyDown={fetchData(inputItem)}
                    onChange={updateInputItems}
                />
            </div>
            <div
                className={'search-tab-form__buttons-container'}
            >
                <DefaultButton
                    className={'search-tab-form__button'}
                    label={intl.formatMessage({id: 'mainPage.search'})}
                    onClick={fetchData(inputItem)}
                />
            </div>
        </div>
    );
};