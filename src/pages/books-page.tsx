import React from 'react';
import BookListContainer from '../widgets/book-list/book-list-container';
import ShoppingCartTable from '../widgets/shopping-cart-table/shopping-cart-table';

const BooksPage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default BooksPage;
