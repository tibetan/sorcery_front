import React from 'react';
import Button from '@mui/material/Button';
import { Book } from '@/entities/book/model/types';

import './book-list-item.sass';

interface BookListItemProps {
    book: Book;
    onAddToCart: (book: Book) => void;
}

const BookListItem = ({ book, onAddToCart }: BookListItemProps) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(book)}
          className="btn btn-info add-to-cart">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default BookListItem;
