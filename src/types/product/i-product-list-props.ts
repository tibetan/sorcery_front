import { IProduct, TApiProductFilters } from "./";
import { TError } from "../error";

interface IProductListProps {
    // Redux Props
    products: IProduct[]; // Список products
    loading: boolean; // Индикатор загрузки
    error: TError; // Ошибка

    // Dispatch Props
    fetchProducts: (filters?: TApiProductFilters) => void; // Метод для запроса products

    // Own Props
    apiService: {
        getProducts: (filters?: TApiProductFilters) => Promise<IProduct[]>;
    };
}

export default IProductListProps
