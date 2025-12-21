import { ProductFiltersState } from '../types';
import { ApiFilters } from '@/shared/api/types';

export const buildApiFilters = (
    filters: ProductFiltersState
): ApiFilters => {
    const apiFilters: ApiFilters = {};

    if (filters.search) {
        apiFilters.search = filters.search;
    }

    if (filters.category) {
        apiFilters.category = filters.category;
    }

    if (filters.sortBy) {
        apiFilters.sort = filters.sortBy;
    }

    if (filters.order) {
        apiFilters.order = filters.order;
    }

    return apiFilters;
};
