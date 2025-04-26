import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()


export const UserProvider = ({children}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
   /*  const [ token, setToken] = useState(true);   */
    
    
  
    const handleLogout =()=>{
       /*  setToken(false) */
    }

    const getEmail = (e) =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const getPassword = (e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
    
    const validarData = async(e) => {
      e.preventDefault(); // evitamos los comportamientos por defecto
      
      const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email,
      password,
      }),
      });
      const data = await response.json();
      alert(data?.error || "Authentication successful!");
      localStorage.setItem("token", data.token);





     /*  let errorTemps = {};
      if(!email.trim()) errorTemps.email = "Campo obligatorio";   
      else if(email !== emailDefault) errorTemps.email = "email no existe o es incorrecto"
      if(!pass.trim()) errorTemps.pass = "Campo obligatorio";
      else if(pass.length < 6) errorTemps.pass = "Contraseña debe tener mas de 6 caracteres"
      else if( pass !== passwordDefault) errorTemps.pass = "Contraseña incorrecta"
      setError(errorTemps) */
    };

  
    return(
        <UserContext.Provider value={{handleLogout,email, password, error, validarData, getEmail, getPassword,setEmail, setPassword }}> 
            {children}
        </UserContext.Provider>
    )
}
