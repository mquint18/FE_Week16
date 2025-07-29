import { Button } from "react-bootstrap"
import type {NewProduct, ShopList} from "../App"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal'

type ProductProps = {
    product: NewProduct
    items: ShopList[]
    setItems:(items:unknown)=> void;
}

export default function ChangeQuant({items,product,setItems}: ProductProps) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const newQuant = (itemToUpdate: string, newQuant: number)=>{
        setItems(items.map(item => (
        item.id !== itemToUpdate ? item : {
            ...items,
            quantity: newQuant
        }
    )))}

return (
    <>
    <Button
        variant = 'info'
        onClick={handleShow}>
            Udpate Quantity
         
     </Button>

    <Modal
        show = {show}
        onHide={(handleClose)}
    >
        <Modal.Header closeButton>
            <Modal.Title>Change Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body> Type in a number
            <div>
                 <input
            className = 'change-amt'
            type="number"
            name="new amount"
            value={newQuant}
            onChange={(e) => setItems(e.target.value)}
     /> 
            </div>
            </Modal.Body>
            <Modal.Footer> 
                <Button variant = "secondary" onClick={handleClose}>
                    Cancel 
                </Button>

                <Button variant= "info" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
    </Modal>
</>

)
}
      {/*          <input
            className = 'change-amt'
            type="number"
            name="new amount"
            value={newQuant}
            onChange={(e) => setItems(e.target.value)}
     /> Enter Updated Quantity

     */}