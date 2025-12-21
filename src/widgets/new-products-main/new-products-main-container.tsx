import React from 'react';
import NewProductsMain from './new-products-main';
import Spinner from '@/shared/ui/spinner';
import ErrorIndicator from '@/shared/ui/error-indicator';
import { useGetProductsQuery } from '@/entities/product/api/productApi';
import { useAppSelector } from '@/app/providers/store/hooks';
import { useDebounce } from '@/shared/lib/hooks/use-debounce';
import { selectSelectedProductId } from '@/features/product-filters/model/selectors';
import { useProductFilters } from '@/features/product-filters/model/hooks/use-product-filters';
import { buildApiFilters } from '@/shared/lib/api/build-api-filters';

const NewProductsMainContainer = () => {
    const selectedId = useAppSelector(selectSelectedProductId);
    const filters = useAppSelector((state) => state.productFilters);
    const debouncedFilters = useDebounce(filters, 400);
    const apiFilters = buildApiFilters(debouncedFilters);
    const { data: products, isLoading, error } = useGetProductsQuery(apiFilters);
    const { setCategory, setSelectedId } = useProductFilters();

    if (isLoading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return <NewProductsMain
        products={products || []}
        selectedId={selectedId}
        onSelectCategory={setCategory}
        onSelectProduct={setSelectedId}
    />;
};

export default NewProductsMainContainer;
