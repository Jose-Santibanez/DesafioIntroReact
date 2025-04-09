import { useContext } from "react"
import { Row, Col, Button, Container} from "react-bootstrap"
import { CartContext } from "../context/CartContext"

export const Cart = ()=> {
       
    const {cart,setCart,total, handleItems } = useContext(CartContext)
    
    const prueba = [{id: 0 , nombre:'nombre', cantidad = },{id: 1, nombre: 'nombre'}]

    const yaExiste = id => prueba.find(elem => elem.id == id) != undefined;
    
    const validaDuplicados = (id)=>{ 
       let duplicado = prueba.find(e=>e.id == id) !== undefined
       return duplicado
    }

    validaDuplicados(1)
    
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
                            <button className="btn-red">-</button>
                            <button onClick={()=>handleItems(e)}>+</button>
                        </ul>
                    ))} 
                    </div>
                    
                    <h2>Total: {total}</h2>  
                    <Button>Pagar</Button>
                
            </div>
    )
}