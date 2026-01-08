import type { ReactNode } from "react";

export interface GridProps {
    columns?: number;
    gap?: string | number;
    className?: string;
    children: ReactNode;
}
