import { baseApi } from '@/shared/api/base-api';
import { adaptResponseWith } from '@/shared/lib/api/adapt-response';
import { transformBook, transformBooks } from './transform';
import { ApiBook, Book } from '@/entities/book/model/types';

export const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => ({
                url: '/books',
            }),
            transformResponse: adaptResponseWith<ApiBook[], Book[]>(
                transformBooks
            ),
            providesTags: ['Book'],
        }),

        getBookById: builder.query<Book, number>({
            query: (id) => `/books/${id}/`,
            transformResponse: adaptResponseWith<ApiBook, Book>(
                transformBook
            ),
            providesTags: (_r, _e, id) => [{ type: 'Book', id }],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
} = bookApi;
