import React from 'react';
import BookList from './book-list';
import Spinner from '@/shared/ui/spinner';
import ErrorIndicator from '@/shared/ui/error-indicator';
import { useGetBooksQuery } from '@/entities/book/api/book-api';
import { useAddBookToCart } from '@/features/cart/add-book/model/hooks/use-add-book-to-cart';

const BookListContainer = () => {
    const { data: books, isLoading, error } = useGetBooksQuery();
    const addBookToCart = useAddBookToCart();

    if (isLoading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return (
        <BookList
            books={books ?? []}
            onAddToCart={addBookToCart}
        />
    );
};

export default BookListContainer;
