import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Toolbar from './components/Toolbar'
import FillList from './components/FillList'
import './App.css'

 export type ShopList = {
    id: string
    name: string
    quantity: string
    picture: string
 }

export type NewProduct = {
    id: string
    name: string
    quantity: string
    picture: string
}


export default function App() {

    const [items, setItems] = useState([
                {
                id:'',
                name: '',
                quantity: 0,
                picture: null
                },
            ]);

//const [product, setProduct] = useState()

 const [shopList, setShopList] = useState([])
 const handleFillList = (shopList) => {
    setShopList(shopList);
 };

const deleteProduct = (idToDelete: string) => {
    setItems(items.filter(i => i.id !== idToDelete))
}

return(
<div>
    <div className="container-fluid">
    <h1 className = "bg-warning text-center text-primary" >Shopping List App</h1> {/*Page header/title */}
    </div>
      <div className= "container-fluid"> {/* container for the Toolbar with buttons from ./Toolbar */}
      

<p>

</p>


<div>
    <FillList 
    onShopListChange={handleFillList} 
    items={items} 
    setItems={setItems}
    deleteProduct={deleteProduct}/>
    
</div>
<div>
    
    
        
    
</div>

</div>
   <div>
          
            

            </div>
</div>
)
}