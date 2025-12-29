import React from 'react';
import classNames from 'classnames';
import { BUTTON_SIZES, BUTTON_TYPES } from './model';
import Spinner from '@/shared/ui/spinner';
import type { ButtonProps } from './model';
import './button.sass';


export const Button: React.FC<ButtonProps> = ({
    variant = BUTTON_TYPES.PRIMARY,
    size = BUTTON_SIZES.MEDIUM,
    loading = false,
    disabled = false,
    className,
    children,
    ...rest
}) => {
    const isDisabled = disabled || loading;

    const btnClass = classNames(
        'button',
        `button--${variant}`,
        `button--${size}`,
        {
            'button--disabled': isDisabled,
        },
        className
    );

    return (
        <button
            className={btnClass}
            disabled={isDisabled}
            {...rest}
        >
            {loading ? (
                    <span><Spinner/></span>
            ) : (
                <span>{children}</span>
            )}
        </button>
    );
};
