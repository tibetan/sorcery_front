import React from 'react';
import classNames from 'classnames';
import { TEXT_VARIANTS } from './model';
import type { TextProps } from './model';
import './text.sass';

export const Text : React.FC<TextProps> = ({
    as,
    children,
    variant = TEXT_VARIANTS.DEFAULT,
    className,
    style,
    show = true,
    ...rest
}) => {
    const Component = as || 'span';

    const textClass = classNames(
        'text',
        variant !== TEXT_VARIANTS.DEFAULT && `text--${variant}`,
        className,
        {
            show,
            hide: show === false,
        }
    );

    return (
        <Component
            className={textClass}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
};
