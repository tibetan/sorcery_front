import React from 'react';
import classNames from 'classnames';
import { IMAGE_RATIO } from './model';
import type { ImageProps } from './model';
import './image.sass';

export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    loading='lazy',
    ratio = IMAGE_RATIO.MAIN,
    className,
    mask = false,
    ...rest
}) => {
    const imgClass = classNames(
        'image',
        `image--${ratio.replace(':', '-')}`,
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
