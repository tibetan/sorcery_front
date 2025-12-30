import { reviews } from './review.dummy';
import { ApiReview, CreateReviewDto } from "@/entities/review/model/types";

const isCreateReviewDto = (body: unknown): body is CreateReviewDto => {
    if (!body || typeof body !== 'object') return false;

    const b = body as Record<string, unknown>;

    return (
        typeof b.user_id === 'number' &&
        typeof b.product_id === 'number' &&
        typeof b.rating === 'number' &&
        typeof b.description === 'string' &&

        // optional: string | undefined
        (b.created_at === undefined || typeof b.created_at === 'string') &&
        (b.updated_at === undefined || typeof b.updated_at === 'string') &&

        // optional: object | null | undefined
        (b.user === undefined || b.user === null || typeof b.user === 'object') &&
        (b.product === undefined || b.product === null || typeof b.product === 'object')
    );
};

export const handleReviews = (
    url: string,
    method: string,
    body?: unknown
) => {
    if (url === '/reviews' && method === 'GET') {
        return reviews;
    }

    if (url === '/reviews' && method === 'POST') {
        if (!isCreateReviewDto(body)) {
            throw new Error('Invalid review payload');
        }

        const newReview: ApiReview = {
            id: Date.now(),
            ...body,
        };

        reviews.push(newReview);
        return newReview;
    }

    const reviewMatch = url.match(/^\/reviews\/(\d+)\/?$/);
    if (reviewMatch && method === 'GET') {
        const id = Number(reviewMatch[1]);
        const review = reviews.find((p) => p.id === id);

        if (!review) throw new Error('Review not found');
        return review;
    }

    if (reviewMatch && method === 'PATCH') {
        const id = Number(reviewMatch[1]);
        const review = reviews.find((p) => p.id === id);
        if (!review) throw new Error('Review not found');
        Object.assign(review, body);
        return review;
    }

    throw new Error('Not found');
};
