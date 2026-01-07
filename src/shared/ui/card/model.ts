import type { HTMLAttributes } from 'react';

export const CARD_VARIANT = {
    DEFAULT: 'default',
    SURFACE: 'surface',
    ACCENT: 'accent',
} as const;

export type CardVariant =
    typeof CARD_VARIANT[keyof typeof CARD_VARIANT];

export interface CardProps
    extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    hoverable?: boolean;
}
