interface IProduct {
    id: number;
    name: string;
    slug?: string;
    price: number;
    shortDescription?: string;
    description?: string;
    additionalInfo?: string;
    sku?: string;
    createdAt?: string;
    updatedAt?: string;
}

export default IProduct;