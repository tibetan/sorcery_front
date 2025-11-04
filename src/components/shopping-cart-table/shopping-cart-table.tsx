import React from 'react';
import Button from '@mui/material/Button';
import { useCartActions } from '../../actions/cart';
import { ICart } from "../../types/cart";
import { ApiService } from "../../services/api";
import { useAppSelector } from '../../store/hooks';

import './shopping-cart-table.sass';

const ShoppingCartTable: React.FC = () => {
    const { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } = useCartActions();
    const { useGetBooksQuery } = ApiService;
    const { data: books } = useGetBooksQuery();
    const { cartItems, orderTotal } = useAppSelector(state => state.cartReducer);

    const handleIncrease = (id: number) => {
        const book = books?.find(b => b.id === id);
        if (book) { bookAddedToCart(book) }
    };

    const handleDecrease = (id: number) => {
        const book = books?.find(b => b.id === id);
        if (book) { bookRemovedFromCart(book) }
    };

    const handleDelete = (id: number) => {
        const book = books?.find(b => b.id === id);
        if (book) { allBooksRemovedFromCart(book) }
    };

  const renderRow = (item: ICart, idx: number) => {
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
            className="btn btn-outline-danger btn-sm float-right">
            Delete
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            +
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            -
          </Button>
        </td>
      </tr>
    );
  };

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
