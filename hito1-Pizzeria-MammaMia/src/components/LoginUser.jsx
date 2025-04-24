import { useContext } from "react"
import { Button, Nav, NavLink } from "react-bootstrap"
import { UserContext } from "../context/UserContext"
export const LoginUser = ()=>{
   const { handleLogout } = useContext(UserContext)
    return(
        <>
           
            <Nav.Link as={NavLink} to="/Profile" className="links">Profile</Nav.Link> 
            <Button  onClick={handleLogout}className="links">Log Out</Button>
        </>
    )
    
}