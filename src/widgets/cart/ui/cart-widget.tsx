import React from 'react';
import { useAppSelector } from '@/app/providers/store/hooks';
import {
    selectCartItems,
    selectCartTotal,
    selectCartItemsCount,
} from '@/entities/cart/model/selectors';

export const CartWidget = () => {
    const items = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal);
    const count = useAppSelector(selectCartItemsCount);

    return (
        <>
            <div>Items: {count}</div>
            <div>Total: {total}</div>
        </>
    );
};
