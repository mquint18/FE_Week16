import { useState } from "react";
import React from "react";
import AddNewItem from "./AddNewItem";
import type { NewProduct, ShopList } from "../App";

type ListProps = {
    items: ShopList[]
}
  
type ProductProps = {
    product: NewProduct[]
}


export default function FillList({onShopListChange, items}: ListProps) {

    const handleInputChange = (event) => {
        onShopListChange(event.target.value);
    };

const [newProduct, setNewProduct] = useState({});



    return (

        <div>
            <AddNewItem product = {newProduct}> </AddNewItem>
         onChange = { setShopList([...items]) }

        <div>
            <h2>Shopping List</h2>
        
        
            {items.map(product => (
                <div key={product.id}>
                    {product.name} 
                    {product.picture}
                    {product.quantity}
                    {product.id}
                </div>
            ))}
            <div>

            </div>
        </div>
        </div>
    )



}

