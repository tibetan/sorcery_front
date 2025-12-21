export type SortOrder = 'asc' | 'desc';

export interface ProductFiltersState {
    search: string;
    category: string | null;
    sortBy: 'price' | 'rating' | 'name';
    order: SortOrder;
    selectedId: number | null;
}
