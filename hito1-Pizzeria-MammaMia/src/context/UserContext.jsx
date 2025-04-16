import { createContext, use, useEffect, useState } from "react";

export const UserContext = createContext()


export const UserPrivder = ({children}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const token = true;
  
    const emailDefault = 'validaCorreo@email.cl'
    const passwordDefault  = 'password';
    
    const getEmail = (e) =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const getPass = (e)=>{
        setPass(e.target.value)
        console.log(pass)
    }
    const validarData = (e) => {
      e.preventDefault(); // evitamos los comportamientos por defecto
      
      let errorTemps = {};
      if(!email.trim()) errorTemps.email = "Campo obligatorio";   
      else if(email !== emailDefault) errorTemps.email = "email no existe o es incorrecto"
      if(!pass.trim()) errorTemps.pass = "Campo obligatorio";
      else if(pass.length < 6) errorTemps.pass = "Contraseña debe tener mas de 6 caracteres"
      else if( pass !== passwordDefault) errorTemps.pass = "Contraseña incorrecta"
      setError(errorTemps)
    }

    
   
    return(
        <UserContext.Provider value={{email, pass, error, validarData,setEmail, setPass, getEmail, getPass }}> 
            {children}
        </UserContext.Provider>
    )
}
