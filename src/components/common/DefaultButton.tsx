import React, {HTMLProps} from "react";

export const DefaultButton = ({onClick, className, label} : HTMLProps<HTMLButtonElement>) => (
    <button
        className={`default-button ${className}`}
        onClick={onClick}
    >
        {label}
    </button>
);