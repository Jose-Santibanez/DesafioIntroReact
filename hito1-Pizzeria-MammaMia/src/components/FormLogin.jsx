import { useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap";


export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form-register">
        <div className="form-contenedor">
            <Form className="form">
            <h1>Ingresar</h1>
                <Row className="mt-2">
                    <Form.Group as={Col} md={3}>
                       <Form.Label>Email</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md={8}>
                        <Form.Control placeholder="Ingrese email"/>
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col} md={3}>
                        <Form.Label>Contraseña</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md={8}>
                        <Form.Control placeholder="Ingrese contraseña"/>
                    </Form.Group>
                </Row>
                <Button type="" size="lg" variant="outline-dark" 
                    className="mt-4 form-btn">Enviar</Button>
            </Form>
        </div>
    </div>
  )
}


