
import { Card, Button } from "react-bootstrap";



export const CardPizza = ({key,img, name,desc,ingredients, price} )=>{
    const ingredientes = ingredients;
 
    
    return(
        <> 
          <Card className="card" onSubmit={''}>
            <Card.Img src={img}/>
           
            <Card.Body className="card-body" >
                <Card.Title>{name}</Card.Title>
                <Card.Text className="card-text">
                    <p className="item-card-text descripcion">{desc}</p>
                    <p className="item-card-text titulo">Ingredientes:</p>
                    <p className="item-card-text ingredientes"><img src="/pizza-icon.svg"/> {ingredientes.map((e)=>
                         <li key={key}>{e}</li>)}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>Precio: ${price}</h3>
                <div className="botones">
                    <Button variant="outline-secondary">Ver más</Button>
                    <Button type="submit" variant="secondary">Añadir <img src="/AgregarCarrito.svg"/></Button>
                </div>
            </Card.Footer>
          </Card>  
        </>
    )
};