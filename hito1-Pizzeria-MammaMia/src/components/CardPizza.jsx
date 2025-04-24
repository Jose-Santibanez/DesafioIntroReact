
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";



export const CardPizza = ({ props })=>{  
    const {handleItems} = useContext(CartContext)
    const {  getItemSeleccionado } = useContext(PizzaContext)
    const navigate = useNavigate()
       const irPizza = (id = 'p001') => {
            
        getItemSeleccionado(id)
            navigate(`/Pizza/${id}`)
          
           
       }
    

    return(
        <> 
          <Card className="card" >
            <Card.Img src={props.img}/>
           
            <Card.Body className="card-body" >
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="card-text">
                    <p className="item-card-text titulo">Ingredientes:</p>
                    <p className="item-card-text ingredientes"><img src="/pizza-icon.svg"/> {props.ingredients.map((e)=>
                         <li key={props.id}>{e}</li>)}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>Precio: ${props.price}</h3>
                <div className="botones">
                    <Button 
                    value={props.id}
                    onClick={()=>irPizza(props.id)} variant="outline-secondary">Ver más</Button>
                    <Button  onClick={()=>{handleItems(props)}} variant="secondary">Añadir <img src="/AgregarCarrito.svg"/></Button>
                </div>
            </Card.Footer>
          </Card>  
        </>
    )
};