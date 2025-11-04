import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiBase } from './api-base';
import { IApiBook, IBook } from '../../../types/book';
import { transformBook } from '../transformers/books';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: getApiBase() }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], void>({
            query: () => '/books',
            transformResponse: (response: IApiBook[]) =>
                response.map(transformBook),
        }),
    }),
});

export const {
    useGetBooksQuery,
} = booksApi;
