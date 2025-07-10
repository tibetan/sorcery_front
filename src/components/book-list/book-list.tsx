import React from 'react';

import BookListItem from '../book-list-item/book-list-item';
import { IBook } from '../../types/book';

import './book-list.sass';

interface BookListProps {
  books: IBook[];
  onAddedToCart: (bookId: IBook['id']) => void;
}

const BookList = ({ books, onAddedToCart }: BookListProps) => {
  return (
    <ul className="book-list">
      {
        books.map((book: IBook) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          );
        })
      }
    </ul>
  );
}

export default BookList;
