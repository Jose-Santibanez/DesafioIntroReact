import { useContext } from "react"
import { Button, Nav, NavLink } from "react-bootstrap"
import { UserContext } from "../context/UserContext"

export const LoginUser = ()=>{
   const { handleLogout} = useContext(UserContext)

 
    return(
        <>
           
             <Nav className="me-auto" >
             <Nav.Link as={NavLink} to="/profile" className="links links">profile</Nav.Link>
             </Nav>
            <Button  onClick={handleLogout}className="links">Log Out</Button>
        </>

    )
    
}