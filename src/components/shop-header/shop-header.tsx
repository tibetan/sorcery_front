import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.sass';
import {RootState} from "../../store";
import {connect} from "react-redux";
import { ICart } from '../../types/cart';

interface ShopHeaderProps {
  cartItems: ICart[];
  total: number;
}

const ShopHeader = ({ cartItems, total }: ShopHeaderProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Sorcery</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {totalItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = (state: RootState) => {
    const { cartItems, orderTotal } = state.cartReducer as any;
    return {
        cartItems,
        total: orderTotal,
    };
};

// const mapStateToProps = ({ cartReducer: { cartItems, orderTotal } }: RootState) => {
//   return {
//     cartItems: cartItems,
//     total: orderTotal,
//   };
// };

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
