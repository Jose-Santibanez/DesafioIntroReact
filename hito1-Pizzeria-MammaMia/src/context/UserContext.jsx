import { createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart";

export const UserContext = createContext()


export const UserProvider = ({children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [ tokens, setTokens] = useState('');  
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

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
            setUser(tokenExistente)
        }
    }
    const validarData = async(e) => {
      e.preventDefault(); // evitamos los comportamientos por defecto
       try{     
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json",  },
                body: JSON.stringify({email, password,}),
                });

      const data = await response.json();
      /* alert(data?.error || "autenticación exitosa"); */
      if(response.ok){
        alert('Autenticación exitosa')
        localStorage.setItem("token", data.token);
        setTokens(data.token)
        navigate('/profile',{replace : true})
        setUser(data)
      }else{
        alert(data.error || 'Error al iniciar sesión')
      }
    }catch(error){
        console.error('Error en la autenticación', error)
    }
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
    //Metodo para acceder al perfil del usuario
      // Obtener datos del usuario logueado
    const inicioSesion = async () => {
        const token = localStorage.getItem('token');
        if (token) {
        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: { Authorization: `Bearer ${token}` },
            });
            if (response.ok) {
            const data = await response.json();
            setUser(data);
            } else {
            console.error("Token inválido o expirado");
            handleLogout();
            }
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
        }
        }
    };

    // Método para limpiar el localStorage y limpiar los estados  EMAIL - PASS
    const handleLogout = ( ) =>{
        localStorage.removeItem('token')
        setTokens('')
        setEmail('');
        setPassword('');
        navigate('/',{replce: true})
    }

    useEffect(()=>{
        validarTokensExistente()
             
        inicioSesion()
    },[])

    return(
        <UserContext.Provider value={{ handleLogout ,handleRegister, email, password, error, validarData, getEmail, getPassword,setEmail, setPassword, tokens,user }}> 
            {children}
        </UserContext.Provider>
    )
}
