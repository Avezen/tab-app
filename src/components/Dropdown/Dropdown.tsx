import React, {ChangeEvent, useState} from "react";
import {DropdownItem} from "./DropdownItem";

interface DropdownProps {
    toggled: boolean;
    toggleDropdown: any;
    dropdownSearch: any;
    dropdownItems: any;
    onChange: any;
    inputItems: any;
}


export const Dropdown = ({toggled, toggleDropdown, dropdownSearch, dropdownItems, onChange, inputItems}: DropdownProps) => {

    return (
        <React.Fragment>
            <button
                onClick={() => toggleDropdown(!toggled)}
            >
                Dropdown
            </button>
            <div
                style={{display: toggled ? 'block' : 'none'}}
            >
                <input
                    type={'text'}
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
        </React.Fragment>
    );
};