import { ApiFilters } from '@/shared/api/types';

/**
 * Универсальный builder для ApiFilters.
 * Преобразует объект фильтров в Record<string, string | string[]>,
 * игнорируя null/undefined, числа и boolean приводятся к строке.
 */
export const buildApiFilters = (filters: Record<string, any>): ApiFilters => {
    const apiFilters: ApiFilters = {};

    Object.entries(filters).forEach(([key, value]) => {
        if (value === null || value === undefined) return;

        if (Array.isArray(value)) {
            apiFilters[key] = value.map(v => String(v));
        } else {
            apiFilters[key] = String(value);
        }
    });

    return apiFilters;
};
