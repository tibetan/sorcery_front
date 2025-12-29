import React from 'react';
import classNames from 'classnames';
import { CheckboxProps } from './model';
import './checkbox.sass';

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    className,
    ...rest
}) => {
    return (
        <label className={classNames('checkbox', className)}>
            <input type="checkbox" className="checkbox__input" {...rest} />
            {label && <span className="checkbox__label">{label}</span>}
        </label>
    );
};
