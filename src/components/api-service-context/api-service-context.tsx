import React from 'react';

import { IProduct, TApiProductFilters } from '../../types/product';
import { IBook } from '../../types/book';

type ApiServiceContextType = {
    getBooks: () => Promise<IBook[]>;
    getProducts: (filters?: TApiProductFilters) => Promise<IProduct[]>;
    getProduct: (id: number) => Promise<IProduct>;
};

const ApiServiceContext = React.createContext<ApiServiceContextType | []>([]);

const {
  Provider: ApiServiceProvider,
  Consumer: ApiServiceConsumer
} = ApiServiceContext;

export {
  ApiServiceProvider,
  ApiServiceConsumer
};
