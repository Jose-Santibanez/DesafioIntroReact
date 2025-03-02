import { Card, Button } from "react-bootstrap";


export const CardPizza = ({img, name,ingredients, price })=>{
    const ingredientes = ingredients.join(", ");
    return(
        <> 
          <Card className="card">
            <Card.Img src={img}/>
           
            <Card.Body className="card-body">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="card-text">
                    <p className="item-card-text titulo">Ingredientes:</p>
                    <p className="item-card-text ingredientes"><img src="/pizza-icon.svg"/> {ingredientes}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>Precio: ${price}</h3>
                <div className="botones">
                    <Button variant="outline-secondary">Ver más</Button>
                    <Button variant="secondary">Añadir <img src="/AgregarCarrito.svg"/></Button>
                </div>
            </Card.Footer>
          </Card>  
        </>
    )
};