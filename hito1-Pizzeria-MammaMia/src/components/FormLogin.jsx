import { useContext } from "react"
import { Form, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";



export const FormLogin = () => {
  /* const { email, pass, error,setEmail, setPass, validarData } = useContext(UserContext);
 */
 /*  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(""); */

  const { email, getEmail,getPass, pass, validarData,error } = useContext(UserContext)
  const emailDefault = 'validaCorreo@email.cl'
  const passwordDefault  = 'password';

  
  /* const validarData = (e) => {
    e.preventDefault(); // evitamos los comportamientos por defecto
    console.log(e)
    let errorTemps = {};
    if(!email.trim()) errorTemps.email = "Campo obligatorio";   
    else if(email !== emailDefault) errorTemps.email = "email no existe o es incorrecto"
    if(!pass.trim()) errorTemps.pass = "Campo obligatorio";
    else if(pass.length < 6) errorTemps.pass = "Contraseña debe tener mas de 6 caracteres"
    else if( pass !== passwordDefault) errorTemps.pass = "Contraseña incorrecta"
    setError(errorTemps)
  } */
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
                        {error.email && <span className="obligatorios">{error.email}</span>} 
                    </Form.Group>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col} md={3}>
                        <Form.Label>Contraseña</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md={8}>
                        <Form.Control onChange={getPass} 
                        type="password"  
                        value={pass}
                        placeholder="Ingrese contraseña"/>
                        {error.pass && <span className="obligatorios">{error.pass}</span>} 
                    </Form.Group>

                </Row>
                <Button type="submit" size="lg" variant="outline-dark" 
                    className="mt-4 form-btn">Enviar</Button>
            </Form>
        </div>
    </div>
  )
}


