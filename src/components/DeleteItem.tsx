import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import type { NewProduct, ShopList } from "../App";



type DeleteItemProps = {
        deleteProduct: (id: string) => void,
        product: NewProduct[],
        items: ShopList[],
        setItems:(items:unknown)=> void;


    }


export default function DeleteItem({
    product,
    deleteProduct
}: DeleteItemProps
) 
{
    return (
        <div className='del-btn'>
           
            <Button className='del-btn'
                
            onClick={() => deleteProduct(product.id)}>Remove Item </Button>
         
        
           
        </div>
    )
}