import React from 'react';
import type { TApiServiceReal, TApiServiceFake } from '../../types/api-service';

export const ApiServiceContext = React.createContext<TApiServiceReal | TApiServiceFake | null>(null);

const {
  Provider: ApiServiceProvider,
  Consumer: ApiServiceConsumer
} = ApiServiceContext;

export {
  ApiServiceProvider,
  ApiServiceConsumer
};
