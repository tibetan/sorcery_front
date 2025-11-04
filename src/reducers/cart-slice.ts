import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../types/book';
import { ICart } from '../types/cart';

// --- Тип состояния ---
interface CartState {
    cartItems: ICart[];
    orderTotal: number;
}

// --- Начальное состояние ---
const initialState: CartState = {
    cartItems: [],
    orderTotal: 0,
};

// --- Вспомогательные функции ---
const updateCartItems = (cartItems: ICart[], item: ICart, idx: number) => {
    if (item.count === 0) {
        return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
    }

    if (idx === -1) {
        return [...cartItems, item];
    }

    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book: IBook, item: ICart | undefined, quantity: number): ICart => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0,
    } = item || {};

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price,
    };
};

const updateOrderTotal = (cartItems: ICart[]): number =>
    cartItems.reduce((sum, item) => sum + item.total, 0);

// --- Основной slice ---
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        bookAddedToCart(state, action: PayloadAction<IBook>) {
            const book = action.payload;
            const itemIndex = state.cartItems.findIndex(({ id }) => id === book.id);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(book, item, 1);
            state.cartItems = updateCartItems(state.cartItems, newItem, itemIndex);
            state.orderTotal = updateOrderTotal(state.cartItems);
        },

        bookRemovedFromCart(state, action: PayloadAction<IBook>) {
            const book = action.payload;
            const itemIndex = state.cartItems.findIndex(({ id }) => id === book.id);
            const item = state.cartItems[itemIndex];

            if (!item) return;

            const newItem = updateCartItem(book, item, -1);
            state.cartItems = updateCartItems(state.cartItems, newItem, itemIndex);
            state.orderTotal = updateOrderTotal(state.cartItems);
        },

        allBooksRemovedFromCart(state, action: PayloadAction<IBook>) {
            const book = action.payload;
            const item = state.cartItems.find(({ id }) => id === book.id);
            if (!item) return;

            const itemIndex = state.cartItems.findIndex(({ id }) => id === book.id);
            const newItem = updateCartItem(book, item, -item.count);
            state.cartItems = updateCartItems(state.cartItems, newItem, itemIndex);
            state.orderTotal = updateOrderTotal(state.cartItems);
        },

        cartCleared(state) {
            state.cartItems = [];
            state.orderTotal = 0;
        },
    },
});

export const {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart,
    cartCleared,
} = cartSlice.actions;

export default cartSlice.reducer;
