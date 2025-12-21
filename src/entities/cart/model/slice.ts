import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculateTotalPrice, updateItem, updateItems } from './helpers';
import { CartState, CartItem, CartItemInput } from './types';

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemInput>) {
            const input = action.payload;
            const index = state.items.findIndex(i => i.id === input.id);
            const item = state.items[index];

            const updatedItem = updateItem(input, item, 1);
            state.items = updateItems(state.items, updatedItem, index);
            state.totalPrice = calculateTotalPrice(state.items);
        },

        removeItem(state, action: PayloadAction<CartItemInput>) {
            const input = action.payload;
            const index = state.items.findIndex(i => i.id === input.id);
            const item = state.items[index];
            if (!item) return;

            const updatedItem = updateItem(input, item, -1);
            state.items = updateItems(state.items, updatedItem, index);
            state.totalPrice = calculateTotalPrice(state.items);
        },

        removeItemCompletely(state, action: PayloadAction<CartItemInput>) {
            const input = action.payload;
            const index = state.items.findIndex(i => i.id === input.id);
            const item = state.items[index];
            if (!item) return;

            const updatedItem = updateItem(input, item, -item.count);
            state.items = updateItems(state.items, updatedItem, index);
            state.totalPrice = calculateTotalPrice(state.items);
        },

        removeCartItem(state, action: PayloadAction<number | undefined>) {
            if (action.payload) {
                state.items = state.items.filter(item => item.id !== action.payload);
            } else {
                state.items = [];
            }
        },

        clearCart: () => initialState,
    },
});

export const {
    addItem,
    removeItem,
    removeItemCompletely,
    removeCartItem,
    clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
