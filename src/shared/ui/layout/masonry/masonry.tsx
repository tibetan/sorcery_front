import React from 'react';
import classNames from 'classnames';
import { MasonryProps } from './types';
import './masonry.sass';

export const Masonry: React.FC<MasonryProps> = ({
    columns = 3,
    gap = '1rem',
    className,
    children,
}) => {
    const style = {
        columnCount: columns,
        columnGap: gap,
    };

    return (
        <div className={classNames('masonry', className)} style={style}>
            {children}
        </div>
    );
};
