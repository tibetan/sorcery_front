import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { ApiService } from '../services/api';

const apiMiddlewares = Object.values(ApiService)
    .filter((api: any) => api?.middleware)
    .map((api: any) => api.middleware);

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiMiddlewares),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
