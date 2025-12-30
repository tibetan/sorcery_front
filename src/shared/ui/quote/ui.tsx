import React from 'react';
import classNames from 'classnames';
import type { QuoteProps } from './model';
import './quote.sass';

export const Quote: React.FC<QuoteProps> = ({
    children,
    author,
    className,
}) => {
    return (
        <blockquote className={classNames('quote', className)}>
            <p className="quote__text">{children}</p>
            {author && <footer className="quote__author">— {author}</footer>}
        </blockquote>
    );
};
