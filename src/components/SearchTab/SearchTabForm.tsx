import React from "react"
import {FormattedMessage, useIntl} from "react-intl";

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
            className={`search-recipe-form`}
        >
            <input
                ref={inputRef}
                type={'text'}
                className={'search-recipe-form__input'}
                placeholder={intl.formatMessage({id: 'mainPage.inputPlaceholder'})}
                value={inputItem}
                onKeyDown={fetchData(inputItem)}
                onChange={updateInputItems}
            />
            <div
                className={'search-recipe-form__buttons-container'}
            >
                <button
                    className={'main-button search-recipe-form__button'}
                    onClick={fetchData(inputItem)}
                >
                    <FormattedMessage id="mainPage.search"/>
                </button>
            </div>
        </div>
    );
};