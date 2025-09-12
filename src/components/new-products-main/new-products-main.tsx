import React from 'react';

import { IProduct } from "../../types/product";
import NewProductsMainItem from "../new-products-main-item/new-products-main-item";

import './new-products-main.sass';

interface ProductListProps {
    products: IProduct[];
}

const NewProductsMain = ({ products }: ProductListProps) => {
  return (
      <div>
          Products Section:
          <ul className="new-products-main">
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
      </div>
  );
}

export default NewProductsMain;
