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
                'textarea', {
                    'textarea--disabled': disabled,
                    'textarea--error': !!error,
            })}
        >
            {label && <label className="textarea-field-label">{label}</label>}

            <textarea
                className={classNames('textarea-field', className)}
                disabled={disabled}
                {...rest}
            />

            {error && <span className="textarea-field-error">{error}</span>}
        </div>
    );
};