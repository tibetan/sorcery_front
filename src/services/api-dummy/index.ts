import { getBooks } from './books';
import { getProducts, getProduct } from './products';
import { getUsers } from './users';
import { getReviews } from './reviews';

const apiService = {
    getBooks,
    getProducts,
    getProduct,
    getUsers,
    getReviews,
};

export default apiService;
