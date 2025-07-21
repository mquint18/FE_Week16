import { useState } from "react"
import App from "../App"
import type {NewProduct, ShopList} from "../App"

type ListProps = {
    items: ShopList[]
}

type ProductProps = {
    product: NewProduct
    setItems:(items:unknown)=> void;
}

export default function editItem({product,setItems,items}: ProductProps) {


const updateItem = items.map((item,index)=>{
            console.log(typeof productId)
            if(item.id  === parseInt(productId)){
                console.log('jrtr')
                return  {
                    name:productName,
                     quantity:productQuant, 
                     picture:productPic,
                     id:index
                }
                
            }
            return item;
        })

    }