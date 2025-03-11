import { Button, Nav, Navbar, Container } from "react-bootstrap"
import { LoginUser } from "./LoginUser";
import { LogoutUser } from "./LogoutUser";
import { NavLink } from "react-router-dom";
export const NavBar = ()=> {
    const total = 25000;
    const sepTotal = total.toLocaleString("es-Es")
    const token = false;
    const logUser = token ? <LoginUser/>: <LogoutUser/>;
    return (
        <navbar className="barra">
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
            <Button variant="succes"><img src="/carrito.svg"/> Total: ${sepTotal}</Button>
            </div>
            
        </navbar>
                
    ) ;
} ;