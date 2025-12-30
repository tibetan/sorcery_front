import React from 'react';
import classNames from 'classnames';
import { FormSectionProps } from './model';
import './form-section.sass';

export const FormSection: React.FC<FormSectionProps> = ({
    title,
    className,
    children,
}) => {
    return (
        <fieldset className={classNames('form-section', className)}>
            {title && <legend className="form-section__legend">{title}</legend>}
            {children}
        </fieldset>
    );
};
