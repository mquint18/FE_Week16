import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import type { NewProduct, ShopList } from "../App";

type ListProps = {
    items: ShopList[]
    setItems:(items:unknown)=> void;
}

type ProductProps = {
    product: NewProduct[]
    
}

export default function DeleteItem(items:ListProps, product:ProductProps) {
    
    const removeItem = idToRemove => {
        setItems(product => items.filter(product.id !== idToRemove))
    };

    return (
        <div>
            <ul>
                {items.map(product => (
                    <div key={product.id}>
                        {product.name}
                        <button onClick={() => removeItem(product.id)}>Delete Item</button>

                    </div>
                ))}
            </ul>
        </div>
    )
}