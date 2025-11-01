// import { setupStore } from '../../../store';
import { productsApi, useGetProductsQuery, useGetProductQuery } from './products';
import type { TApiService } from '../../../types/api-service';
import { getUsers } from './users';
import { reviewsApi } from './reviews';
import type { IProduct, TApiProductFilters } from '../../../types/product';

// const store = setupStore();

// const getProducts = async (filters?: TApiProductFilters): Promise<IProduct[]> => {
//     const result = await store.dispatch(productsApi.endpoints.getProducts.initiate(filters));
//
//     if ('error' in result) {
//         throw result.error
//     }
//
//     return result.data!;
// };
//
// const getProduct = async (id: number) => {
//     const result = await store.dispatch(productsApi.endpoints.getProduct.initiate(id));
//
//     if ('error' in result) {
//         throw result.error
//     }
//
//     return result.data!;
// };

// const getReviews = async () => {
//     const result = await store.dispatch(reviewsApi.endpoints.getReviews.initiate());
//
//     if ('error' in result) {
//         throw result.error
//     }
//
//     return result.data!;
// };

// export { productsApi } from './products';

const RealApiService: TApiService & { productsApi: typeof productsApi } = {
    productsApi,
    useGetProductsQuery: useGetProductsQuery as any,
    useGetProductQuery: useGetProductQuery as any,
    // getProducts,
    // getProduct,
    // getUsers,
    // getReviews,
};

export default RealApiService;
