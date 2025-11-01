import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    selectedId: number | null;
    selectedCategory: string | null;
}

const initialState: ProductState = {
    selectedId: null,
    selectedCategory: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedId: (state, action: PayloadAction<number | null>) => {
            state.selectedId = action.payload;
        },
        setSelectedCategory: (state, action: PayloadAction<string | null>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setSelectedId, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
