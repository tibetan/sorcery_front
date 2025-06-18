import { IProduct } from '../models/i-product';
import { IApiProduct } from '../models/i-api-product';

export default class ApiService {

    #apiBase = 'http://localhost/api';

    getResource = async (url: string) => {
        const res = await fetch(`${this.#apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllProducts = async () => {
        const res = await this.getResource(`/products/`);
        return res.results
            .map(this._transformProduct);
    };

    getProduct = async (id: number) => {
        const product = await this.getResource(`/products/${id}/`);
        return this._transformProduct(product);
    };

    _transformProduct = (product: IApiProduct): IProduct => {
        return {
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
        }
    }
}
