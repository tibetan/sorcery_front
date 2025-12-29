import React from 'react';
import classNames from 'classnames';
import type { SelectProps } from './model';
import './select.sass';

export const Select: React.FC<SelectProps> = ({
    label,
    options,
    error,
    disabled,
    className,
    ...rest
}) => {
    return (
        <div className="select">
            {label && <label className="select__label">{label}</label>}

            <select
                className={classNames(
                    'select__field',
                    {
                        'select__field--error': !!error,
                        'select__field--disabled': disabled,
                    },
                    className
                )}
                disabled={disabled}
                {...rest}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && <span className="select__error">{error}</span>}
        </div>
    );
};
