import { IApiReview, IReview } from '../../types/review';
import { getResource } from './api-base';
import { transformUser } from './users';
import { transformProduct } from './products';

export const getReviews = async (): Promise<IReview[]> => {
    const res = await getResource('/reviews/');
    return res.results.map(transformReview);
};

const transformReview = (review: IApiReview): IReview => ({
    id: review.id,
    userId: review.user_id,
    user: review.user ? transformUser(review.user) : null,
    productId: review.product_id,
    product: review.product ? transformProduct(review.product) : null,
    rating: review.rating,
    description: review.description,
    createdAt: review.created_at,
    updatedAt: review.updated_at,
});
