import { IApiReview, IReview } from "../../../types/review";
import { transformUser } from "../real-api/users";
import { transformProduct } from "./products";

export const transformReview = (review: IApiReview): IReview => ({
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
