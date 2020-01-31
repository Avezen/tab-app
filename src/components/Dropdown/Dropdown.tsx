import React, {ChangeEvent, useState} from "react";
import {DropdownItem} from "./DropdownItem";
import styles from "./Dropdown.module.css";

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
        <div className={styles.dropdownWrapper}>
            <button
                className={styles.dropdownButton}
                onClick={() => toggleDropdown(!toggled)}
            >
                Dropdown
            </button>
            <div
                className={styles.dropdown}
                style={{display: toggled ? 'flex' : 'none'}}
            >
                <input
                    type={'text'}
                    className={styles.dropdown__input}
                    placeholder={'Search...'}
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