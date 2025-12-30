import React from 'react';
import classNames from 'classnames';
import { RadioProps } from './model';
import './radio.sass';

export const Radio: React.FC<RadioProps> = ({
    label,
    className,
    ...rest
}) => {
    return (
        <label className={classNames('radio', className)}>
            <input type="radio" className="radio__input" {...rest} />
            {label && <span className="radio__label">{label}</span>}
        </label>
    );
};
