import type React from 'react';

export const BUTTON_TYPES = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

export const BUTTON_SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
} as const;

// export type ButtonVariant = keyof typeof BUTTON_TYPES;
// export type ButtonSize = keyof typeof BUTTON_SIZES;

export type ButtonVariant = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];
export type ButtonSize = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
}
