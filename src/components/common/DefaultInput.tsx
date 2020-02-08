import React, {HTMLProps} from "react";

interface DefaultInputProps {
    inputRef?: any;
}

export const DefaultInput = ({inputRef, type, placeholder, value, onKeyDown, onChange, className} : DefaultInputProps & HTMLProps<HTMLInputElement>) => (
    <input
        ref={inputRef}
        type={type}
        className={`default-input ${className}`}
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
    />
);