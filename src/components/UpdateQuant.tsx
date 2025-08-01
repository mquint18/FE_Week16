import { Button } from "react-bootstrap"
import type {NewProduct, ShopList} from "../App"
import { useState } from "react"


type UpdateQuantProps = {
    product: NewProduct[],
    items: ShopList[],

}

export default function UpdateQuant({product, items, setItems}:UpdateQuantProps)

{
const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
        setItems([])
    }
//update add logic - match id and update new quant
//setItems with new values (...items,newquant)
    

    return (

        <div>

            <Button className="udpate-btn"
            onClick={() => handleClick()}
            size="lg"
            style={{backgroundColor: toggle ? 'orange' : 'blue',
                color: toggle ? 'black' : 'white'
            }}
            >Update Quantity
            </Button>

            <div className="update-form"
                style={{display: toggle ? 'block' : 'none'}}
            >
                <form className="update-form"
                    onSubmit={handleClick}
                ></form>

            </div>


        </div>
    )
}