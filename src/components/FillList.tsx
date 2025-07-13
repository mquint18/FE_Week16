import { useState } from "react";
import React from "react";
import AddNewItem from "./AddNewItem";
import type { NewProduct, ShopList } from "../App";


type ListProps = {
    items: ShopList[]
    setItems: ()=> void;
}
  
type ProductProps = {
    product: NewProduct[]
}


export default function FillList({onShopListChange, items,setItems}: ListProps) {

    const handleInputChange = (event) => {
        onShopListChange(event.target.value);
    };

const [newProduct, setNewProduct] = useState({});

console.log(items);

    return (

        <div>
            <AddNewItem product={newProduct} setItems={setItems} items={items}> </AddNewItem>
         {/* onChange = { setShopList([...items]) } */}

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

