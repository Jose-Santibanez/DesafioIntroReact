import { Form, Row, Col, Button} from "react-bootstrap"

export const Cart = ()=> {
       
    return(
            <div className="contenedor-cart">
                <Form className="cart">
                    <h3>
                        Detalles del pedido: 
                    </h3>
                    <Row>
                        <Form.Group as={Col} >
                            <ul className="cart-detalle">
                                <li>Napolitana</li> 
                                <li>salame</li>
                            </ul>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <ul>
                                <li>$5950</li>
                            </ul>
                        </Form.Group>
                    </Row>
                    
                    <h2>Total:</h2>  
                    <Button>Pagar</Button>
                </Form>    

            </div>
    )
}