import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import type { NewProduct, ShopList } from "../App";

type ListProps = {
    items: ShopList[]
}

type ProductProps = {
    product: NewProduct
    setItems:(items:unknown)=> void;
}

export default function DeleteItem(items:ListProps, product:ProductProps) {
    const removeItem = idToRemove => {
        setItems(product => items.filter(product.id !== idToRemove))
    };

    return (
        <div>
            <ul>
                {items.map(product => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => removeItem(product.id)}>Delete Item</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}