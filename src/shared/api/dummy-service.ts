import { handleProducts } from '@/entities/product/api/product.dummy.handlers';
import { handleReviews } from '@/entities/review/api/review.dummy.handlers';
import { handleBooks } from '@/entities/book/api/book.dummy.handlers';
import { handleUsers } from '@/entities/user/api/user.dummy.handlers';

const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const dummyService = {
    async handle(url: string, method: string, body?: unknown) {
        // имитация задержки
        await sleep(900);

        // рандомная ошибка (10%)
        if (Math.random() < 0.1) {
            throw { status: 500, message: 'Server error (mocked)' };
        }

        const cleanUrl = url.split('?')[0];

        switch (cleanUrl) {
            case '/products':
                return {
                    status: 200,
                    data: handleProducts(cleanUrl, method, body),
                };

            // default:
            //     throw new Error('Not found');
        }

        if (url.startsWith('/reviews')) {
            return {
                status: 200,
                data: handleReviews(url, method, body),
            };
        }

        if (url.startsWith('/books')) {
            return {
                status: 200,
                data: handleBooks(url, method, body),
            };
        }

        if (url.startsWith('/users')) {
            return {
                status: 200,
                data: handleUsers(url, method, body),
            };
        }

        throw { status: 404, message: 'Not found' };
    },
};
