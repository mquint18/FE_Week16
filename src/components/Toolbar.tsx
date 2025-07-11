//Imports the Toolbar Buttons into the Toolbar component and defines the buttons

import { useState } from "react";
import ToolbarButton from "./ToolbarButton";



export default function Toolbar({}) {
    const [products, setProducts] = useState([{}, {}]);
    const handleAddProduct = () => {
        
       
        setProducts([{name:setProducts}])
    }


    
     return (
    <div className = "container">
        <div className="btn-group">
        <ToolbarButton text={'Add Item'} onClick={()=> handleAddProduct()}/>  
        <ToolbarButton text={'Change Item'} onClick={()=>alert("Change Item")}/>
        <ToolbarButton text={"Don't Click Here"} onClick={()=>alert("Do not click this button!")}/>
        </div>
    </div> 
    )
}
    