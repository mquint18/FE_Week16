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
            
        <ToolbarButton text={'Add Item'} onClick={()=> alert('old add')}/>
        <ToolbarButton text={'Edit Item'} onClick={()=>alert("Change Item")}/>
        <ToolbarButton text={"Remove Item"} onClick={()=>alert("Do not click this button!")}/>
        </div>
    </div> 
    )
}
    