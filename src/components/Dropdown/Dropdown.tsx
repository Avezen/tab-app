import React from "react";
import {DropdownItem} from "./DropdownItem";
import {FormattedMessage, useIntl} from "react-intl";

interface DropdownProps {
    toggled: boolean;
    toggleDropdown: any;
    dropdownSearch: any;
    dropdownItems: any;
    onChange: any;
    inputItems: any;
}


export const Dropdown = ({toggled, toggleDropdown, dropdownSearch, dropdownItems, onChange, inputItems}: DropdownProps) => {
    const intl = useIntl();

    return (
        <div
            className={'dropdown-wrapper'}
        >
            <button
                className={'main-button'}
                onClick={() => toggleDropdown(!toggled)}
            >
                {toggled ? <FormattedMessage id="mainPage.close"/> : <FormattedMessage id="mainPage.findFromList"/>}
            </button>
            <div
                className={'dropdown'}
                style={{display: toggled ? 'flex' : 'none'}}
            >
                <input
                    type={'text'}
                    className={'dropdown__input'}
                    placeholder = {intl.formatMessage({ id: 'mainPage.searchPlaceholder' })}
                    onChange={dropdownSearch}
                />
                <ul>
                    {dropdownItems.map((ingredient: string, key: number) => (
                            <li
                                key={key}
                            >
                                <DropdownItem
                                    ingredient={ingredient}
                                    onChange={onChange}
                                    checked={inputItems.includes(ingredient)}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};