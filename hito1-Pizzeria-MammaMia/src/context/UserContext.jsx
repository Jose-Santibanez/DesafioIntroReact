import { createContext, use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()


export const UserProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [ tokens, setTokens] = useState('');  

    const getEmail = (e) =>{
        setEmail(e.target.value)  
    }
    const getPassword = (e)=>{
        setPassword(e.target.value)   
    }

    const validarTokensExistente =()=> {
        const tokenExistente = localStorage.getItem('token');
        if(tokenExistente){
            setTokens(tokenExistente)
        }
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
      alert(data?.error || "autenticación exitosa");
      localStorage.setItem("token", data.token);
      setTokens(localStorage.getItem('token'))
     /*  let errorTemps = {};
      if(!email.trim()) errorTemps.email = "Campo obligatorio";   
      else if(email !== emailDefault) errorTemps.email = "email no existe o es incorrecto"
      if(!pass.trim()) errorTemps.pass = "Campo obligatorio";
      else if(pass.length < 6) errorTemps.pass = "Contraseña debe tener mas de 6 caracteres"
      else if( pass !== passwordDefault) errorTemps.pass = "Contraseña incorrecta"
      setError(errorTemps) */
    };
    const handleRegister = async (e) =>{
        e.preventDefault() // evitamos el comportamiento por defecto del evento
        const response = await fetch("http://localhost:5000/api/auth/register", {
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
            alert(data?.error || "registro exitoso");
            localStorage.setItem("token", data.token);
    }

    const handleLogout = ( ) =>{
        setTokens(localStorage.removeItem('token'))
        setEmail('');
        setPassword('');
    }
    useEffect(()=>{
        validarTokensExistente()
    },[])
    return(
        <UserContext.Provider value={{handleLogout ,handleRegister, email, password, error, validarData, getEmail, getPassword,setEmail, setPassword, tokens }}> 
            {children}
        </UserContext.Provider>
    )
}
