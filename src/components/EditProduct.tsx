import { useState } from "react"
import App from "../App"
import type {newProduct, ShopList} from "../App"



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