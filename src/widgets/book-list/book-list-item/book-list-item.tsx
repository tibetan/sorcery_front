import React from 'react';
import { Button } from '@/shared/ui/button';
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
            size="medium"
            variant="primary"
            onClick={() => onAddToCart(book)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default BookListItem;
