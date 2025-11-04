import React from 'react';

import BookListItem from '../book-list-item/book-list-item';
import { IBook } from '../../types/book';

import './book-list.sass';

interface BookListProps {
    books: IBook[];
    onAddToCart: (book: IBook) => void;
}

const BookList = ({ books, onAddToCart }: BookListProps) => {
  return (
    <ul className="book-list">
      {
        books.map((book: IBook) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} onAddToCart={onAddToCart} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default BookList;
