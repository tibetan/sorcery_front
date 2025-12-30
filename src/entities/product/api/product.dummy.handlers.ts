import { products } from './product.dummy';
import { ApiProduct, CreateProductDto } from "@/entities/product/model/types";

const isCreateProductDto = (body: unknown): body is CreateProductDto => {
    if (!body || typeof body !== 'object') return false;

    const b = body as Record<string, unknown>;

    return (
        typeof b.name === 'string' &&
        typeof b.slug === 'string' &&
        typeof b.price === 'number' &&
        typeof b.short_description === 'string' &&
        typeof b.description === 'string' &&
        typeof b.additional_info === 'string' &&
        typeof b.sku === 'string' &&
        typeof b.created_at === 'string' &&
        typeof b.updated_at === 'string'
    );
};

export const handleProducts = (
    url: string,
    method: string,
    body?: unknown
) => {
    if (url === '/products' && method === 'GET') {
        return products;
    }

    if (url === '/products' && method === 'POST') {
        if (!isCreateProductDto(body)) {
            throw new Error('Invalid product payload');
        }

        const newProduct: ApiProduct = {
            id: Date.now(),
            ...body,
        };

        products.push(newProduct);
        return newProduct;
    }

    const productMatch = url.match(/^\/products\/(\d+)\/?$/);
    if (productMatch && method === 'GET') {
        const id = Number(productMatch[1]);
        const product = products.find((p) => p.id === id);

        if (!product) throw new Error('Product not found');
        return product;
    }

    if (productMatch && method === 'PATCH') {
        const id = Number(productMatch[1]);
        const product = products.find((p) => p.id === id);
        if (!product) throw new Error('Product not found');
        Object.assign(product, body);
        return product;
    }

    throw new Error('Not found');
};
