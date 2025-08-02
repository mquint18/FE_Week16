import { Button } from "react-bootstrap"
import type {NewProduct, ShopList} from "../App"
import { useState } from "react"


type UpdateQuantProps = {
    product: NewProduct[],
    items: ShopList[],
    setItems: setItems
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
    const updateItem = items.map((item,index)=>{
            console.log(typeof product.id)
            if(item.id  === (product.id)){
                console.log('jrtr')
                return  {
                    name:product.name,
                     quantity:product.quanity, 
                     picture:product.picture,
                     id:index
                }
                
            }
            return item;
        })

    return (

        <div>

            <Button className="udpate-btn"
            onClick={(updateItem) => handleClick()}
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
                >
                    <label>New Quantity:</label>
                    <input type="number"
                            name = 'quantity'
                            value = {product.quantity} />

                </form>

            </div>


        </div>
    )
}