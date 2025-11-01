import { useGetProductsQuery, useGetProductQuery } from '../../services/api/real-api/products';
import { useGetReviewsQuery } from '../../services/api/real-api/reviews';
import type { IProduct, TApiProductFilters } from '../product';
import type { IUser } from '../user';
import type { IReview } from '../review';
import type { IBook } from '../book';

// Универсальный тип сервиса
export type TApiService = {
    // методы, возвращающие данные через промис — компоненты всегда используют их
    getProducts?: (filters?: TApiProductFilters) => Promise<IProduct[]>;
    getProduct?: (id: number) => Promise<IProduct>;
    getUsers?: () => Promise<IUser[]>;
    getReviews?: () => Promise<IReview[]>;
    getBooks?: () => Promise<IBook[]>; // опционально, т.к. в реальном API может не быть

    // хуки RTK Query (опционально, если нужны)
    useGetProductsQuery: typeof useGetProductsQuery;
    useGetProductQuery: typeof useGetProductQuery;

    // useGetReviewsQuery?: typeof useGetReviewsQuery;
};

export type TApiFilters = Record<string, string | string[]>;
