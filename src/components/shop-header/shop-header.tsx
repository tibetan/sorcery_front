import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectTotalItems } from '../../selectors/cart';

import './shop-header.sass';

const ShopHeader: React.FC = () => {
    const { orderTotal } = useAppSelector(state => state.cartReducer);
    const totalItems = useSelector(selectTotalItems);

    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">Sorcery</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {totalItems} items (${orderTotal})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;
