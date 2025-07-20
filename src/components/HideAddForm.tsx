import React from "react";
import { useState } from "react";
import '../App.css'


const HideAdd = () => {
    
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <button onClick={() => setToggle(!toggle)} className="btn btn-primary mb-5">Add Item</button>


        </div>
    )
}
