import { books } from './book.dummy';
import { ApiBook, CreateBookDto } from '@/entities/book/model/types';

const isCreateBookDto = (body: unknown): body is CreateBookDto => {
    if (!body || typeof body !== 'object') return false;

    const b = body as Record<string, unknown>;

    return (
        typeof b.title === 'string' &&
        typeof b.author === 'string' &&
        typeof b.price === 'number' &&
        typeof b.cover_image === 'string'
    );
};

export const handleBooks = (
    url: string,
    method: string,
    body?: unknown
) => {
    if (url === '/books' && method === 'GET') {
        return books;
    }

    if (url === '/books' && method === 'POST') {
        if (!isCreateBookDto(body)) {
            throw new Error('Invalid book payload');
        }

        const newBook: ApiBook = {
            id: Date.now(),
            ...body,
        };

        books.push(newBook);
        return newBook;
    }

    const bookMatch = url.match(/^\/books\/(\d+)\/?$/);
    if (bookMatch && method === 'GET') {
        const id = Number(bookMatch[1]);
        const book = books.find((p) => p.id === id);

        if (!book) throw new Error('Book not found');
        return book;
    }

    if (bookMatch && method === 'PATCH') {
        const id = Number(bookMatch[1]);
        const book = books.find((p) => p.id === id);
        if (!book) throw new Error('Book not found');
        Object.assign(book, body);
        return book;
    }

    throw new Error('Not found');
};
