import { ApiUser, User } from '@/entities/user/model/types';
import { ApiProduct, Product } from '@/entities/product/model/types';

export interface ApiReview {
    id: number;
    user_id: number;
    user?: ApiUser | null;
    product_id: number;
    product?: ApiProduct | null;
    rating: number;
    description: string;
    created_at?: string;
    updated_at?: string;
}

export interface Review {
    id: number;
    userId: number;
    user?: User | null;
    productId: number;
    product?: Product | null;
    rating: number;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export type CreateReviewDto = Omit<ApiReview, 'id'>;
