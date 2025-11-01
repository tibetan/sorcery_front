import { IApiProduct, IProduct } from '../../../types/product';

export const transformProduct = (product: IApiProduct): IProduct => ({
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
