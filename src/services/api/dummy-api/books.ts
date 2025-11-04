import { createApi, BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { TFakeArg } from "../../../types/api-service";
import { books } from "./data/books";
import { transformBook } from "../transformers/books";
import { IBook } from '../../../types/book';

const fakeBaseQuery: BaseQueryFn<TFakeArg, unknown, FetchBaseQueryError> = async ({ url }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (url === '/books') {
        return { data: books.map(transformBook) };
    }

    if (Math.random() < 0.1) {
        return { error: { status: 500, data: 'Server error (mocked)' } };
    }

    return { error: { status: 404, data: 'Not found' } };
};

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fakeBaseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], void>({
            query: () => ({ url: '/books' }),
        }),
    }),
});

export const {
    useGetBooksQuery,
} = booksApi;
