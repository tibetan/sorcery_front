import React from 'react';

import { IProduct } from "../../types/product";

import './new-products-main-item.sass';

interface ProductListItemProps {
    product: IProduct;
}

const NewProductsMainItem = ({ product }: ProductListItemProps) => {
    const { name, price, shortDescription, description, sku } = product;
    return (
      <div className="new-products-main-item">
          <div>{name}: {price} _ {sku}</div>
          <div>{shortDescription}</div>
          <div>{description}</div>
      </div>
    );
}

export default NewProductsMainItem;
