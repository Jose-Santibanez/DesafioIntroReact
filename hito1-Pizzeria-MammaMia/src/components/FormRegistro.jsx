import { useState } from "react";
import { Form, Row, Col, Container, Button} from "react-bootstrap";

export const FormRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const [repPass, setRepPass] = useState("");

    const validaNombre = (e) =>{
        setNombre(e.target.value)
    }
    const validaEmail = (e) =>{
        setEmail(e.target.value)
    }
    const validaPass = (e) =>{
        setPass(e.target.value)
    }
    const validaRepPass = (e) =>{
        setRepPass(e.target.value)
    }
    return (
        <div className="form-register">
            <div className="form-contenedor"  >
                
                <Form className="form">
                <h1>Registro</h1>
                    <Row className="mt-5"  >
                        <Form.Group  as={Col} md={3}>
                            <Form.Label >Nombre</Form.Label>
                        
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                        <Form.Control onChange={validaNombre} type="text" placeholder="Ingrese Nombre Completo"/>
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md={3}>
                            <Form.Label >Email</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={validaEmail} type="text" placeholder="Ingrese Email"/>
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md={3}>
                            <Form.Label >Contraseña</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={validaPass} type="text" placeholder="Ingrese contraseña"/>
                        </Form.Group>
                    </Row>
                    <Row className="mt-3 pb-4" >
                    <Form.Group as={Col} md={3} >
                            <Form.Label >Repetir contraseña</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={validaRepPass} type="text" placeholder="Repetir contraseña"/>
                        </Form.Group>
                    </Row>
                    <Button size="lg" variant="outline-dark" 
                    className="mt-4 form-btn" >Enviar</Button>
                </Form>
            </div>

        </div>
    )
}