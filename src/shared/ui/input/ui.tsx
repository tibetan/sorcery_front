import React from 'react';
import type { InputProps } from './model';
import './input.sass';

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className,
    ...rest
}) => {
    const field = (
        <input
            className="input__field"
            {...rest}
        />
    );

    if (!label) {
        return (
            <div className="input">
                {field}
                {error && <span className="input__error">{error}</span>}
            </div>
        );
    }

    return (
        <label className="input">
            <span className="input__label">{label}</span>
            {field}
            {error && <span className="input__error">{error}</span>}
        </label>
    );
};