import { useState } from "react";
import App from "../App";
import type { NewProduct, ShopList } from "../App";

type ListProps = {
    items: ShopList[]
}

type ProductProps = {
    product: NewProduct
    setItems:(items:unknown)=> void;
}

let id = 1;

export default function AddNewItem({product,setItems,items}: ProductProps) {

    const [newProduct, setNewProduct] = useState({});
    const [productName, setProductName] = useState(' ')
    const [productQuant, setProductQuant] = useState(0)
    const [productPic, setProductPic] = useState('');
    const [productId, setProductId] = useState(null);


    const [formData, setFormData] = useState({productId:0, productName:'', productQuant:0, productPic:'no pic'});


    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewProduct( {name:productName, quantity:productQuant, picture:productPic,id:1})
{/*        const updateItem = items.map((item,index)=>{
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
*/}
        setItems([...items,{
                    name:productName,
                     quantity:productQuant, 
                     picture:productPic,
                     id:productId
        }])
                 
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
                    <input 
                        type="number" 
                        name='id'
                        value = {productId}
                        onChange={(e) => setProductId(e.target.value)} 
                        />
                    <button >Submit</button>

        </form>
    )

console.log({product});
    }

