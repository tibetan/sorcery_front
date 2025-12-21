import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder, ProductFiltersState } from './types';

const initialState: ProductFiltersState = {
    search: '',
    category: null,
    sortBy: 'price',
    order: 'asc',
    selectedId: null,
};

const productFiltersSlice = createSlice({
    name: 'productFilters',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setCategory(state, action: PayloadAction<string | null>) {
            state.category = action.payload;
        },
        setSortBy(state, action: PayloadAction<ProductFiltersState['sortBy']>) {
            state.sortBy = action.payload;
        },
        setOrder(state, action: PayloadAction<SortOrder>) {
            state.order = action.payload;
        },
        setSelectedId(state, action: PayloadAction<number | null>) {
            state.selectedId = action.payload;
        },
        resetFilters: () => initialState,
    },
});

export const {
    setSearch,
    setCategory,
    setSortBy,
    setOrder,
    setSelectedId,
    resetFilters,
} = productFiltersSlice.actions;

export const productFiltersReducer = productFiltersSlice.reducer;
