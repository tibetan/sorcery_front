import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useProductActions } from '../../actions/products';

import { IProduct } from "../../types/product";
import NewProductsMainItem from "../new-products-main-item/new-products-main-item";

import './new-products-main.sass';

interface ProductListProps {
    products: IProduct[];
}

const NewProductsMain = ({ products }: ProductListProps) => {
    const { setSelectedCategory, setSelectedId } = useProductActions();
    const { selectedCategory, selectedId } = useSelector(
        (state: RootState) => state.productReducer
    );

    return (
      <div className="new-products-main">
          Products Section:
          <ul>
              {
                  products.map((product: IProduct) => {
                      return (
                          <li key={product.id}>
                              <NewProductsMainItem product={product} />
                          </li>
                      );
                  })
              }
          </ul>

          <div>
              <button onClick={() => setSelectedCategory('books')}>Books</button>
              <button onClick={() => setSelectedCategory('toys')}>Toys</button>
          </div>

          <ul>
              {products?.map((p) => (
                  <li key={p.id}>
                      <span>{p.name}</span>
                      <button onClick={() => setSelectedId(p.id)}>Select</button>
                  </li>
              ))}
          </ul>

          {selectedId && (
              <div className="modal">
                  <h3>Selected product ID: {selectedId}</h3>
                  <button onClick={() => setSelectedId(null)}>Close</button>
              </div>
          )}
      </div>
  );
}

export default NewProductsMain;
