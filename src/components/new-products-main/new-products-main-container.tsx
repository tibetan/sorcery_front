import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ApiService } from '../../services/api';
import NewProductsMain from './new-products-main';

const { useGetProductsQuery } = ApiService;

export default function NewProductsMainContainer() {
    const { selectedCategory, selectedId } = useSelector(
        (state: RootState) => state.productReducer
    );

    // RTK Query берет данные с сервера, фильтруя по категории
    const { data: products, isLoading, error } = useGetProductsQuery(
        selectedCategory ? { category: selectedCategory } : undefined
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return <NewProductsMain products={products || []} />;
};
