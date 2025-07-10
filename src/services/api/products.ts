import { IApiProduct, IProduct, TApiProductFilters } from '../../types/product';
import { getResource } from './api-base';

const transformProduct = (product: IApiProduct): IProduct => ({
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

// Examples:
// { status: 'new' } → /products?status=new
// { status: ['new', 'popular'] } → /products?status[]=new&status[]=popular
export const getProducts = async (filters: TApiProductFilters = {}) => {
    const query = new URLSearchParams();

    for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
            const value = filters[key];
            if (Array.isArray(value)) {
                value.forEach(v => query.append(`${key}[]`, v));
            } else {
                query.append(key, value);
            }
        }
    }

    const res = await getResource(`/products?${query.toString()}`);
    return res.results.map(transformProduct);
};

export const getProduct = async (id: number) => {
    const product = await getResource(`/products/${id}/`);
    return transformProduct(product);
};

export { transformProduct };
