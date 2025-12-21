import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const realBaseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
    prepareHeaders: (headers) => {
        // если понадобится авторизация
        // headers.set('Authorization', `Bearer ${token}`);
        return headers;
    },
});
