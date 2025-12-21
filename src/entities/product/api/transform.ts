import { ApiProduct, Product } from '@/entities/product/model/types';

export const transformProduct = (product: ApiProduct): Product => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    shortDescription: product.short_description,
    description: product.description,
    additionalInfo: product.additional_info,
    sku: product.sku,
    createdAt: product.created_at,
    updatedAt: product.updated_at,
});

export const transformProducts = (api: ApiProduct[]): Product[] =>
    api.map(transformProduct);