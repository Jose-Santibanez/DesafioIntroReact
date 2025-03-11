import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
export const LogoutUser = ()=>{

    return(
        <>
            <Nav.Link href="#features" className="links">Login</Nav.Link>
            <Nav.Link  as={NavLink} to="/registroForm" className="links">Register</Nav.Link> 
        </>
    )
}