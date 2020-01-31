import React, {ChangeEvent, useState} from "react";
import {DropdownItem} from "./DropdownItem";
import {Dropdown} from "./Dropdown";

interface DropdownContainerProps {
    inputItems: string[];
    setInputItems: any;
}

const dropdownItems = ['onions', 'pepperoni', 'mushroom', 'garlic'];

const DropdownContainer = ({inputItems, setInputItems}: DropdownContainerProps) => {
    const [toggled, toggleDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const dropdownSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();

        if (!inputItems.includes(e.target.id)) {
            setInputItems((oldArray: string[]) => [e.target.id, ...oldArray]);
        } else {
            setInputItems(inputItems.filter((item: string) => item !== e.target.id));
        }
    };

    const filteredDropdownItems = dropdownItems.filter(
        (item: string) => !searchValue || item.toLowerCase().startsWith(searchValue)
    );

    return (
        <Dropdown
            toggled={toggled}
            toggleDropdown={toggleDropdown}
            dropdownSearch={dropdownSearch}
            dropdownItems={filteredDropdownItems}
            onChange={onChange}
            inputItems={inputItems}
        />
    );
};


export default DropdownContainer;