import { useState } from "react";
import React from "react";
import AddNewItem from "./AddNewItem";
import type { NewProduct, ShopList } from "../App";
import CheckMarkButton from "./CheckMarkButton";
import DeleteItem from "./DeleteItem";

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

               <div key={product.id} className ='item-card' >
            <div className ='text-center' >
                <h2 className = 'mb-0'><strong>{product.name}</strong></h2>
                <h4 className = 'mb-0'>Amount:  {product.quantity}</h4>
                <img src= {product.picture} />
                <p className = 'mb-0'> Item #: {product.id}</p>
                <div className= 'check-box'> <CheckMarkButton></CheckMarkButton></div>
                <div>
                    
                </div>
            </div>
        </div>  
            ))}

    {/*}
                <div key={product.id}>
                    {product.name} 
                    {product.picture}
                    {product.quantity}
                    {product.id}
                    
                    
                </div>
      */}          
            

            <div>

            </div>
        </div>
        </div>
    )



}

