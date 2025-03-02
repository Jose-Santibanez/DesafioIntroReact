import { Button, Nav, Navbar, Container } from "react-bootstrap"
import { LoginUser } from "./LoginUser";
import { LogoutUser } from "./LogoutUser";
export const NavBar = ()=> {
    const total = 25000;
    const token = false;
    const logUser = token ? <LoginUser/>: <LogoutUser/>;
    return (
        <div className="barra">
           <div> 
            <Navbar variant="dark" data-bs-theme="dark" className="nav">
                    <Container>
                        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            {logUser}
                        </Nav>
                    </Container>
            </Navbar>
            </div>
            <div className="total">
            <Button variant="succes">Total: ${total}</Button>
            </div>
            
        </div>
                
    ) 
} 