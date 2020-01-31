import React, {ChangeEvent} from "react";


interface DropdownItemProps {
    ingredient: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

export const DropdownItem = ({ingredient, onChange, checked}: DropdownItemProps) => (
    <div>
        <input
            id={ingredient}
            type={'checkbox'}
            checked={checked}
            onChange={onChange}
        />
        <label htmlFor={ingredient}>
            {ingredient}
        </label>
    </div>
);