import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { CartState } from './types';

export const selectCartState = (state: RootState): CartState => state.cart;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) => state.cart.totalPrice;

// Количество всех товаров в корзине
export const selectCartItemsCount = createSelector(
    [(state: RootState) => state.cart.items],
    (items) => items.reduce((sum, item) => sum + item.count, 0)
);

// Получить конкретный товар по id
export const selectCartItemById = (id: number) =>
    createSelector(
        [(state: RootState) => state.cart.items],
        (items) => items.find((item) => item.id === id)
    );
