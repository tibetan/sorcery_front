import React from 'react';
import { Product } from "@/entities/product/model/types";
import NewProductsMainItem from "./new-products-main-item/new-products-main-item";

import './new-products-main.sass';

interface ProductListProps {
    products: Product[];
    selectedId: number | null;
    onSelectCategory: (category: string | null) => void;
    onSelectProduct: (id: number | null) => void;
}

const NewProductsMain = ({
    products,
    selectedId,
    onSelectCategory,
    onSelectProduct,
}: ProductListProps) => {
    return (
        <div className="new-products-main">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <NewProductsMainItem product={product} />
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={() => onSelectCategory('books')}>Books</button>
                <button onClick={() => onSelectCategory('toys')}>Toys</button>
            </div>

            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <span>{p.name}</span>
                        <button onClick={() => onSelectProduct(p.id)}>Select</button>
                    </li>
                ))}
            </ul>

            {selectedId && (
                <div className="modal">
                    <h3>Selected product ID: {selectedId}</h3>
                    <button onClick={() => onSelectProduct(null)}>Close</button>
                </div>
            )}
        </div>
    );
}

export default NewProductsMain;
