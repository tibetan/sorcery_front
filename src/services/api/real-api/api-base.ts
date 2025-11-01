import { TApiFilters } from '../../../types/api-service';

export const getApiBase = (): string => process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

// Examples:
// { status: 'new' } → /products?status=new
// { status: ['new', 'popular'] } → /products?status[]=new&status[]=popular
export const buildQueryString = (filters: TApiFilters = {}) => {
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

export const getResource = async (url: string) => {
    const res = await fetch(`${getApiBase()}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
};
