import { Button, Nav, Navbar, Container } from "react-bootstrap"
import { LoginUser } from "./LoginUser";
import { LogoutUser } from "./LogoutUser";
import { NavLink } from "react-router-dom";
import { useContext } from "react"; // Para usar el contexto
import { CartContext } from "../context/CartContext"; // componente para consumir el contexto
import { UserContext } from "../context/UserContext";

export const NavBar = ()=> {

    const{total} = useContext(CartContext);
   const {tokens} = useContext(UserContext);
    
    const sepTotal = total.toLocaleString("es-Es")
   
    const logUser = tokens ? <LoginUser/>: <LogoutUser/>;
    return (
        <div className="barra">
           <div> 
            <Navbar variant="dark" data-bs-theme="dark" className="nav">
                    <Container>
                        
                        <Navbar.Brand as={NavLink} to="/" >Pizzería Mamma Mia!</Navbar.Brand>
                        <Nav className="me-auto" >
                            <Nav.Link as={NavLink} to="/" className="links links">Home</Nav.Link>
                            
                            {logUser}
                            
                        </Nav>
                    </Container>
            </Navbar>
            </div>
            <div className="total">
            <Button as={NavLink} to="/Cart" variant="succes"><img src="/carrito.svg"/> Total: ${sepTotal}</Button>
            </div>
            
        </div>
                
    ) ;
} ;