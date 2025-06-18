import React from 'react';

import { IProduct } from '../../models/i-product';

type ApiServiceContextType = {
  getAllProducts: () => Promise<IProduct[]>;
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
