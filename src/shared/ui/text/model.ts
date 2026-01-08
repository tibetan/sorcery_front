import type { HTMLAttributes } from 'react'

export const TEXT_VARIANTS = {
    DEFAULT: 'default',
    NOTE: 'note',
    CAPTION: 'caption',
    QUOTE: 'quote',
    HEADING: 'heading',
    TOOLTIP: 'tooltip',
    ANNOTATION: 'annotation',
} as const;

export type TextVariant = typeof TEXT_VARIANTS[keyof typeof TEXT_VARIANTS];

export type TextTags =
    | 'span'
    | 'div'
    | 'p'
    | 'strong'
    | 'em';

export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: TextTags;
    variant?: TextVariant;
    show?: boolean;
}
