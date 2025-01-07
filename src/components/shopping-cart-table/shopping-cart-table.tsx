import React from 'react';
import { connect } from 'react-redux';

import {RootState} from "../../store";
import { addBookToCart, removeBookFromCart, removeAllBooksFromCart } from '../../actions/cart-actions';

import { ICart } from "../../models/i-cart";

import './shopping-cart-table.sass';

interface ShoppingCartTableProps {
  items: ICart[];
  total: number;
  onIncrease: (id: number) => void;
  onDelete: (id: number) => void;
  onDecrease: (id: number) => void;
}

const ShoppingCartTable = ({ items, total, onIncrease, onDelete, onDecrease }: ShoppingCartTableProps) => {
  const renderRow = (item: ICart, idx: number) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            Delete
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            +
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            -
          </button>
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

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartReducer: { cartItems, orderTotal } }: RootState) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: addBookToCart,
  onDecrease: removeBookFromCart,
  onDelete: removeAllBooksFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
