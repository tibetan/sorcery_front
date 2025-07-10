import { getUsers } from './users';
import { getProducts, getProduct } from './products';
import { getReviews } from './reviews';

const apiService = {
    getUsers,
    getProducts,
    getProduct,
    getReviews,
};

export default apiService;