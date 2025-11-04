import React from 'react';
import BookList from './book-list';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { ApiService } from '../../services/api';
import { useCartActions } from "../../actions/cart";

const BookListContainer = () => {
    const { useGetBooksQuery } = ApiService;
    const { data: books, isLoading, error } = useGetBooksQuery();
    const { bookAddedToCart } = useCartActions();

    if (isLoading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return <BookList books={books || []} onAddToCart={bookAddedToCart} />;
};

export default BookListContainer;
