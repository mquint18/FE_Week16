import { useState } from "react";
import Button from 'react-bootstrap/Button';
import App from "../App";
import type { NewProduct, ShopList } from "../App";
import "./AddNew.css"

type ListProps = {
    items: ShopList[]
}

type ProductProps = {
    product: NewProduct
    setItems:(items:unknown)=> void;
}




export default function AddNewItem({product,setItems,items}: ProductProps) {

    const [newProduct, setNewProduct] = useState({});
    const [productName, setProductName] = useState(' ')
    const [productQuant, setProductQuant] = useState(0)
    const [productPic, setProductPic] = useState('');
    const [productId, setProductId] = useState('');

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
    }

    const [formData, setFormData] = useState({productId:0, productName:'', productQuant:0, productPic:'no pic'});


    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewProduct( {name:productName, quantity:productQuant, picture:productPic,id:1})

     {/*}  const updateItem = items.map((item,index)=>{
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
        {*/}
        setItems([{
                    name:productName,
                     quantity:productQuant, 
                     picture:productPic,
                     id:productId
                    },...items])
                 
    }

    return (
        <div className="d-flex gap-2 mb-2">
             <Button onClick={() => setToggle(!toggle)} size= "lg" style= {{backgroundColor: toggle ? 'red' : 'green', color: toggle ? 'black' : "white" }}>Add Item</Button>
            
        <div className ='add-form' style={{display: toggle ? 'block' : 'none'}}>
        <form className="add-item" onSubmit={handleSubmit} id = "add-form">
            <h3 className= 'add-header'>Enter new item here:</h3>

             <label>Name:   </label>

                    <input 
                        type="text" 
                        name ="name"
                        value ={productName}
                        onChange={(e) => setProductName(e.target.value)} 
                        />

                    <label>   Amount: </label>

                    <input 
                        type="number"
                        name ='quantity'
                        value = {productQuant}
                        onChange={(e) => setProductQuant(parseInt(e.target.value))} 
                        />

                    <label>  Picture Link: </label>

                    <input 
                        type="text" 
                        name='picture'
                        value = {productPic}
                        onChange={(e) => setProductPic(e.target.value)} 
                        />
                    
                    <label> Item Id: </label>
                    <input 
                        type="string" 
                        name='id'
                        value = {productId}
                        onChange={(e) => setProductId(e.target.value)} 
                        />
                    <button >Submit</button>

        </form>
    </div>
    <div>
        
    </div>
    </div>
    )

console.log({product});
    }

