import { IApiBook, IBook } from "../../../types/book";

export const transformBook = (book: IApiBook): IBook => ({
    id: book.id,
    title: book.title,
    author: book.author,
    price: book.price,
    coverImage: book.cover_image,
});
