import { Button } from "react-bootstrap"
import type {NewProduct, ShopList} from "../App"
import { useState } from "react"

type ProductProps = {
    product: NewProduct
    items: ShopList[]
    setItems:(items:unknown)=> void;
}

export default function ChangeQuant({items,product,setItems}: ProductProps) {
    
const newQuant = (itemToUpdate: string, newQuant: number)=>{
        setItems(items.map(item => (
        item.id !== itemToUpdate ? item : {
            ...items,
            quantity: newQuant
        }
    )))}

return (
    
    <button>
         <input
            type="number"
            name="new amount"
            value={newQuant}
            onChange={(e) => setItems(e.target.value)}
     />
     </button>
)
}
                