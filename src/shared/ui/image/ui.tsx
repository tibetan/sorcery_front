import React from 'react';
import classNames from 'classnames';
import type { ImageProps } from './model';
import './image.sass';

export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    loading='lazy',
    ratio = null,
    className,
    mask = false,
    ...rest
}) => {
    const imgClass = classNames(
        'image',
        ratio ? `image--${ratio.replace(':', '-')}` : 'image--default',
        { 'image--mask': mask },
        className
    );

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={imgClass}
            {...rest}
        />
    );
};
