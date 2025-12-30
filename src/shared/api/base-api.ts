import { createApi } from '@reduxjs/toolkit/query/react';
import { realBaseQuery } from './real-base-query';
import { dummyBaseQuery } from './dummy-base-query';
import { ApiFilters } from "@/shared/api/types";

const useDummy = process.env.REACT_APP_USE_DUMMY_API === 'true';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: useDummy ? dummyBaseQuery : realBaseQuery,
    endpoints: () => ({}),
    tagTypes: ['Product', 'Review', 'Book', 'User'], // сразу задел под кеш
});

// Examples:
// { status: 'new' } → /products?status=new
// { status: ['new', 'popular'] } → /products?status[]=new&status[]=popular
export const buildQueryString = (filters: ApiFilters = {}) => {
    const query = new URLSearchParams();
    for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
            const value = filters[key];
            if (Array.isArray(value)) {
                value.forEach(v => query.append(`${key}[]`, v));
            } else {
                query.append(key, value);
            }
        }
    }
    return query.toString();
};
