import { RootState } from '../store';

export const selectTotalItems = (state: RootState) =>
    state.cartReducer.cartItems.reduce((sum, item) => sum + item.count, 0);
