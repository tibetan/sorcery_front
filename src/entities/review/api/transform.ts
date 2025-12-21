import { ApiReview, Review } from '@/entities/review/model/types';
import { User } from '@/entities/user/model/types';
import { Product } from '@/entities/product/model/types';

const transformUserFromReview = (user: ApiReview['user']): User => ({
    id: user!.id,
    name: user!.name,
    // минимально необходимое
});

const transformProductFromReview = (product: ApiReview['product']): Product => ({
    id: product!.id,
    name: product!.name,
    slug: product!.slug,
    price: product!.price,
});

export const transformReview = (review: ApiReview): Review => ({
    id: review.id,
    userId: review.user_id,
    user: review.user ? transformUserFromReview(review.user) : null,
    productId: review.product_id,
    product: review.product ? transformProductFromReview(review.product) : null,
    rating: review.rating,
    description: review.description,
    createdAt: review.created_at,
    updatedAt: review.updated_at,
});

export const transformReviews = (api: ApiReview[]): Review[] =>
    api.map(transformReview);
