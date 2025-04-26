import { useContext, useState } from "react"
import { Form, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

export const FormLogin = () => {
 

const {getEmail, getPassword, validarData,email,password } = useContext(UserContext)
 
 
  return (
    <div className="form-register">
        <div className="form-contenedor">
            <Form onSubmit={validarData} className="form" >
            <h1>Ingresar</h1>
                <Row className="mt-2">
                    <Form.Group as={Col} md={3}>
                       <Form.Label>Email</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md={8}>
                        <Form.Control onChange={getEmail} 
                                      type="text"
                                      placeholder="Ingrese email"
                                      value={email}/>
                       {/*  {error.email && <span className="obligatorios">{error.email}</span>}  */}
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col} md={3}>
                        <Form.Label>Contraseña</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md={8}>
                        <Form.Control onChange={getPassword} 
                        type="password"  
                        value={password}
                        placeholder="Ingrese contraseña"/>
                        {/* {error.pass && <span className="obligatorios">{error.pass}</span>}  */}
                    </Form.Group>

                </Row>
                <Button type="submit" size="lg" variant="outline-dark" 
                    className="mt-4 form-btn">Enviar</Button>
            </Form>
        </div>
    </div>
  )
}


