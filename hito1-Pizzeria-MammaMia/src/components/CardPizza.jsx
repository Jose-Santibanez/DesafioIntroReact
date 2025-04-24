
import { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
/* import { PizzaContext } from "../context/PizzaContext"; */
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";



export const CardPizza = ({ props })=>{  
    const {handleItems} = useContext(CartContext)
    const {getItemBase} = useContext(PizzaContext)
    const navigate = useNavigate() // hook para navegación Programatica
    const HandleVerMas = () => { 
        getItemBase(props.id)
        navigate(`/Pizza/${props.id}`);  
    }
    useEffect(()=>{
        getItemBase(props.id)
    },[props.id])

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
                        onClick={HandleVerMas} variant="outline-secondary">Ver más</Button>
                    <Button  onClick={()=>{handleItems(props)}} variant="secondary">Añadir <img src="/AgregarCarrito.svg"/></Button>
                </div>
            </Card.Footer>
          </Card>  
        </>
    )
};