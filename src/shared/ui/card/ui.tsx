import React from 'react';
import classNames from 'classnames';
import type { CardProps } from './model';
import { CARD_VARIANT } from './model';
import './card.sass';

export const Card: React.FC<CardProps> = ({
    variant = CARD_VARIANT.DEFAULT,
    hoverable = true,
    className,
    children,
    ...rest
}) => {
    const cardClass = classNames(
        'card',
        `card--${variant}`,
        {
            'card--hoverable': hoverable,
        },
        className
    );

    return (
        <div className={cardClass} {...rest}>
            {children}
        </div>
    );
};
