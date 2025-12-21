import { useAppDispatch } from '@/app/providers/store/hooks';
import { setCategory, setSelectedId } from '@/features/product-filters/model/slice';
import { ProductFiltersState } from '@/features/product-filters/model/types';

export const useProductFilters = () => {
    const dispatch = useAppDispatch();

    return {
        setCategory: (category: ProductFiltersState['category']) =>
            dispatch(setCategory(category)),
        setSelectedId: (id: ProductFiltersState['selectedId']) =>
            dispatch(setSelectedId(id)),
    };
};
