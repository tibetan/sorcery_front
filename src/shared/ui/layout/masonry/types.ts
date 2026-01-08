import type { ReactNode } from "react";

export interface MasonryProps {
    columns?: number;
    gap?: string | number;
    className?: string;
    children: ReactNode;
}
