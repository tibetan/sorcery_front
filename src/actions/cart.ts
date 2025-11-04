import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart,
    cartCleared } from '../reducers/cart-slice';

export const useCartActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ bookAddedToCart,
        bookRemovedFromCart,
        allBooksRemovedFromCart,
        cartCleared
    }, dispatch);
};
