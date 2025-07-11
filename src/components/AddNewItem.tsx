import { useState } from "react";
import App from "../App";
import type { NewProduct, ShopList } from "../App";

type ListProps = {
    items: ShopList[]
}

type ProductProps = {
    product: NewProduct
}

let id = 1;

export default function AddNewItem({product}: ProductProps) {

    const [newProduct, setNewProduct] = useState({});
    const [productName, setProductName] = useState(' ')
    const [productQuant, setProductQuant] = useState(0)
    const [productPic, setProductPic] = useState('')


    const [formData, setFormData] = useState({productId:0, productName:'', productQuant:0, productPic:'no pic'});


    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewProduct( {name:productName, quantity:productQuant, picture:productPic,id:1})
        console.log('Form data submitted:', formData);

    }

    return (

        <form onSubmit={handleSubmit}>

             <label>Name:</label>

                    <input 
                        type="text" 
                        name ="name"
                        value ={productName}
                        onChange={(e) => setProductName(e.target.value)} 
                        />

                    <label>Amount:</label>

                    <input 
                        type="number"
                        name ='quantity'
                        value = {productQuant}
                        onChange={(e) => setProductQuant(parseInt(e.target.value))} 
                        />

                    <label>Picture Link:</label>

                    <input 
                        type="text" 
                        name='picture'
                        value = {productPic}
                        onChange={(e) => setProductPic(e.target.value)} 
                        />
                    
                    <label>Item Id:</label>

                    <button >Submit</button>

        </form>
    )
    
console.log({product});
    }

