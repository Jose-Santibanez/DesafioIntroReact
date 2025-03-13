import {  useState } from "react";
import { Form, Row, Col, Button} from "react-bootstrap";

export const FormRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")
    const [repPass, setRepPass] = useState("");
    const [error, setError] = useState({}); // se inicializa un objeto vacío para cada uno de los campos.

    const validarData = (e) => {
        e.preventDefault();
        let errorTemps = {}; //declaramos un objeto vacio para los errores
        
        if(!nombre.trim()) errorTemps.nombre = "el nombre es obligatorio";
        if(!email.trim()) errorTemps.email = "El email es obligario";
        if(!pass.trim()) errorTemps.pass = "La contraseña es obligatoria";
        else if(pass.length < 6) errorTemps.pass = "La contraseña debe tener más de 6 caracteres";
        if(!repPass.trim()) errorTemps.repPass = "Repetir la contraseña es obligatorio";
        else if(pass !== repPass) errorTemps.repPass = "Las contraseñas deben ser estrictamente identicas";

        setError(errorTemps);
       /*  if(setError !== 0){

        } */
        
    }

     return (
        <div className="form-register">
            <div className="form-contenedor"  >

                <Form className="form" onSubmit={validarData}>
                <h1>Registro</h1>
               
                    <Row className="mt-2"  >
                    
                        <Form.Group  as={Col} md={3}>
                            <Form.Label >Nombre</Form.Label>
                        
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={(e) => setNombre(e.target.value)} 
                                        type="text" 
                                        value={nombre} //componente controlado= 
                                        placeholder="Ingrese Nombre Completo"
                            />
                            {error.nombre && <span className="obligatorios">{error.nombre}</span>}
                        </Form.Group>
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md={3}>
                            <Form.Label >Email</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} 
                                          type="text" 
                                          value={email}    
                                          placeholder="Ingrese Email"/>
                            {error.email && <span className="obligatorios">{error.email}</span>}
                        </Form.Group> 
                    </Row>
                    <Row className="mt-3">
                        <Form.Group as={Col} md={3}>
                            <Form.Label >Contraseña</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={(e)=> setPass(e.target.value)} 
                                          type="text" 
                                          value={pass}
                                          placeholder="Ingrese contraseña"/>
                            {error.pass && <span className="obligatorios">{error.pass}</span>}
                        </Form.Group>
                    </Row>
                    <Row className="mt-3 pb-2" >
                    
                    <Form.Group as={Col} md={3} >
                            <Form.Label >Repetir contraseña</Form.Label> 
                        </Form.Group>
                        <Form.Group as={Col} md={8}>
                            <Form.Control onChange={(e)=> setRepPass(e.target.value)} 
                                          type="text" 
                                          placeholder="Repetir contraseña"/>
                            {error.repPass && <span className="obligatorios">{error.repPass}</span>}
                        </Form.Group>
                    </Row>
                    <Button type="submit" size="lg" variant="outline-dark" 
                    className="mt-4 form-btn" >Enviar</Button>
                </Form>
            </div>

        </div>
    )
}