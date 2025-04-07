import { createContext, useEffect, useState } from "react"; //importamos el hook createContext para crear un ambito global

export const CartContext = createContext() // Creamos el contexto llamado CartContext


export const CartProvider = ({children})=> {
     
    const [pizza, setPizza] = useState([]);
    const api = "http://localhost:5000/api/pizzas/"
    const getData = async ()=> {
        const res = await fetch(api)
        const data = await res.json();
        setPizza(data)
    }
    useEffect(()=>{
        getData()
    },[]);

    return(
        <CartContext.Provider value={{pizza, setPizza}}>
                {children}
        </CartContext.Provider>
    )
    



}

