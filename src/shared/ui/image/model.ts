import type { ImgHTMLAttributes } from 'react';

export const IMAGE_RATIO = {
    MAIN: '4:5',
    DETAILS: '1:1',
    CONTEXT: '3:2',
} as const;

export type ImageRatio = typeof IMAGE_RATIO[keyof typeof IMAGE_RATIO];

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    ratio?: ImageRatio;
    mask?: boolean;
}
