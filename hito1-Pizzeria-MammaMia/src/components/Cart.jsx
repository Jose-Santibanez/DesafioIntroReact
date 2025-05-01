import { useContext } from "react"
import {  Button} from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"

export const Cart = ()=> {
    const { cart, total, handleItems, eliminaItem } = useContext(CartContext)
    const { tokens,pagarCarrito  } = useContext(UserContext);
    
    return(
            <div className="contenedor-cart">
                    <h3>
                        Detalles del pedido: 
                    </h3>
                    <div>
                    {cart.map(e=>(
                        <ul className="cart-list"> 
                            {
                            e.cantidad > 1 
                            ? <><p>{e.cantidad}</p>  <img src={e.img} alt=""/> <li>{e.name}</li> <li>{e.price}</li></> 
                             :<><p> </p><img src={e.img} alt=""/> <li>{e.name}</li> <li>{e.price}</li></>
                            } 
                            <button className="btn-red" onClick={()=>eliminaItem(e)}>-</button>
                            <button onClick={()=>handleItems(e)}>+</button>
                        </ul>
                    ))} 
                    </div>
                    
                    <h2>Total: {total}</h2>  
                    <Button disabled={!tokens} onClick={()=>pagarCarrito(cart)}>Pagar</Button>
                
            </div>
    )
}