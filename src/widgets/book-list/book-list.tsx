import React from 'react';
import BookListItem from './book-list-item/book-list-item';
import { Book } from '@/entities/book/model/types';
import './book-list.sass';

interface BookListProps {
    books: Book[];
    onAddToCart: (book: Book) => void;
}

const BookList = ({ books, onAddToCart }: BookListProps) => {
  return (
    <ul className="book-list">
      {
        books.map((book: Book) => {
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
