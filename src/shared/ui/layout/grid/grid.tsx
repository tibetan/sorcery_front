import React from 'react';
import classNames from 'classnames';
import { GridProps } from './types';
import './grid.sass';

export const Grid: React.FC<GridProps> = ({
    columns = 3,
    gap = '1rem',
    className,
    children,
}) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
    };

    return (
        <div className={classNames('grid', className)} style={gridStyle}>
            {children}
        </div>
    );
};
