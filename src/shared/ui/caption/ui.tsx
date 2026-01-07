import React from 'react';
import classNames from 'classnames';
import { CaptionProps } from './model';
import './caption.sass';

export const Caption: React.FC<CaptionProps> = ({ children, className }) => {
    return (
        <div className={classNames('caption', className)}>
            {children}
        </div>
    );
};
