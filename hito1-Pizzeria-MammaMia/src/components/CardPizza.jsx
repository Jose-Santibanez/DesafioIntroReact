import { Card, Button } from "react-bootstrap";


export const CardPizza = ()=>{
    return(
        <> 
          <Card className="card">
            <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolorecetas.com%2Fwp-content%2Fuploads%2F2017%2F05%2Fpizza-napolitana-2.jpg&f=1&nofb=1&ipt=91d658efff6f6a1077b786c6fd0958f3ce9c60e9943cd2280174da0b3d65d83a&ipo=images"/>
           
            <Card.Body className="card-body">
                <Card.Title>Pizza Napolitana</Card.Title>
                <Card.Text className="card-text">
                    <p className="item-card-text titulo">Ingredientes:</p>
                    <p className="item-card-text ingredientes"><img src="/pizza-icon.svg"/>  Mozzarella,tomates,jamón,orégano</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <h3>Precio: $</h3>
                <div className="botones">
                    <Button variant="outline-secondary">Ver más</Button>
                    <Button variant="secondary">Añadir</Button>
                </div>
            </Card.Footer>
          </Card>  
        </>
    )
};