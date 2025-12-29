import React from 'react';
import classNames from 'classnames';
import type { TextareaProps } from './model';
import './textarea.sass';

export const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    className,
    disabled,
    ...rest
}) => {
    return (
        <div
            className={classNames(
                'textarea-field', {
                    'textarea-field--disabled': disabled,
                    'textarea-field--error': !!error,
            })}
        >
            {label && <label className="textarea-label">{label}</label>}

            <textarea
                className={classNames('textarea', className)}
                disabled={disabled}
                {...rest}
            />

            {error && <span className="textarea-error">{error}</span>}
        </div>
    );
};