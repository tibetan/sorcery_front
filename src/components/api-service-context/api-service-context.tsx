import React from 'react';
import type { TApiService } from '../../types/api-service';

export const ApiServiceContext = React.createContext<TApiService | null>(null);

const {
  Provider: ApiServiceProvider,
  Consumer: ApiServiceConsumer
} = ApiServiceContext;

export {
  ApiServiceProvider,
  ApiServiceConsumer
};
