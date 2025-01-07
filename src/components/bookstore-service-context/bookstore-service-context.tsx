import React from 'react';

import { IBook } from '../../models/i-book';

type BookstoreServiceContextType = {
  getBooks: () => Promise<IBook[]>;
};

const BookstoreServiceContext = React.createContext<BookstoreServiceContextType | []>([]);

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = BookstoreServiceContext;

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};
