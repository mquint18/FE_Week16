import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import type { NewProduct, ShopList } from "../App";
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

type ListProps = {
    items: ShopList[]
    setItems:(items:unknown)=> void;
}

type ProductProps = {
    product: NewProduct[]
    
}

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
        <div className='d-flex justify-content-between mt-2 mb-1 align-items-center'>
           
            <button className='btn btn-sm btn-outline-danger' 
            onClick={() => deleteProduct(product.id)}>Remove Item</button>
         
        
           
        </div>
    )
}