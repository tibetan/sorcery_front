import React from 'react';
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '@/app/providers/store/hooks';
import { useGetBooksQuery } from '@/entities/book/api/book-api';
import { addItem, removeItem, removeCartItem } from '@/entities/cart/model/slice';
import { selectCartItems, selectCartTotal } from '@/entities/cart/model/selectors';
import Spinner from '@/shared/ui/spinner';
import ErrorIndicator from '@/shared/ui/error-indicator';
import { CartItem } from '@/entities/cart/model/types';

import './shopping-cart-table.sass';

const ShoppingCartTable: React.FC = () => {
    const dispatch = useAppDispatch();

    // RTK Query для получения всех книг
    const { data: books, isLoading, error } = useGetBooksQuery();

    // Селекторы корзины
    const cartItems = useAppSelector(selectCartItems);
    const orderTotal = useAppSelector(selectCartTotal);

    const handleIncrease = (id: number) => {
        const book = books?.find(b => b.id === id);
        if (book) dispatch(addItem(book));
    };

    const handleDecrease = (id: number) => {
        const book = books?.find(b => b.id === id);
        if (book) dispatch(removeItem(book));
    };

    const handleDelete = (id: number) => {
        dispatch(removeCartItem(id));
    };

    const renderRow = (item: CartItem, idx: number) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <Button
                        variant="outlined"
                        onClick={() => handleDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right"
                    >
                        Delete
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => handleIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right"
                    >
                        +
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => handleDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right"
                    >
                        -
                    </Button>
                </td>
            </tr>
        );
    };

    if (isLoading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>{cartItems.map(renderRow)}</tbody>
            </table>

            <div className="total">Total: ${orderTotal}</div>
        </div>
    );
};

export default ShoppingCartTable;
