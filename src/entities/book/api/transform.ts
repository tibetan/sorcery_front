import { ApiBook, Book } from '@/entities/book/model/types';

export const transformBook = (book: ApiBook): Book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    price: book.price,
    coverImage: book.cover_image,
});

export const transformBooks = (api: ApiBook[]): Book[] =>
    api.map(transformBook);
