import { useContext } from "react"
import {  Button} from "react-bootstrap"
import { CartContext } from "../context/CartContext"

export const Cart = ()=> {
       
    const {cart,setCart,total, handleItems, eliminaItem } = useContext(CartContext)
    
   
    
    return(
            <div className="contenedor-cart">
                    <h3>
                        Detalles del pedido: 
                    </h3>
                    <div>
                    {cart.map(e=>(
                        <ul className="cart-list"><img src={e.img} alt=""/>
                            <li>{e.name}</li>
                            <li>{e.price}</li>
                            <button className="btn-red" onClick={()=>eliminaItem(e)}>-</button>
                            <button onClick={()=>handleItems(e)}>+</button>
                        </ul>
                    ))} 
                    </div>
                    
                    <h2>Total: {total}</h2>  
                    <Button>Pagar</Button>
                
            </div>
    )
}