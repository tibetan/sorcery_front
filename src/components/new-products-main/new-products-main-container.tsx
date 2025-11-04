import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ApiService } from '../../services/api';
import NewProductsMain from './new-products-main';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import { useProductActions } from '../../actions/products';

const NewProductsMainContainer = () => {
    const { useGetProductsQuery } = ApiService;
    const { selectedCategory } = useSelector(
        (state: RootState) => state.productReducer
    );
    const { setSelectedCategory, setSelectedId } = useProductActions();

    // RTK Query берет данные с сервера, фильтруя по категории
    const { data: products, isLoading, error } = useGetProductsQuery(
        selectedCategory ? { category: selectedCategory } : undefined
    );

    if (isLoading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return <NewProductsMain
        products={products || []}
        setSelectedCategory={setSelectedCategory}
        setSelectedId={setSelectedId}
    />;
};

export default NewProductsMainContainer;
