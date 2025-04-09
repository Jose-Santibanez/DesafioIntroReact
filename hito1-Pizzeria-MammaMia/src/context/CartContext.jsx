import { createContext, useEffect, useState } from "react"; //importamos el hook createContext para crear un ambito global

export const CartContext = createContext() // Creamos el contexto llamado CartContext


export const CartProvider = ({children})=> {
     
    const [pizza, setPizza] = useState([]);
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])    
    
     const handleItems = (itemPizza)=>{ 
          
        setCart([...cart,itemPizza]) 
        const precio = itemPizza.price;
        calculaTotal(precio)
        }   
       
    const calculaTotal = (precio)=> {
        setTotal(prev => prev + precio)
    }
    
    const api = "http://localhost:5000/api/pizzas/"
    
    const getData = async ()=> {
        try{
            const res = await fetch(api)
            
            if(!res.ok){
                throw new Error(`Error HTTP: ${res.status}`);
            }
            
            const data = await res.json();
            setPizza(data)
        }catch(error){
            console.error("Error al obtener los datos de la API: ",error);
        }
        
    };
    useEffect(()=>{
        getData()
    },[]);

    return(
        <CartContext.Provider value={{pizza, setPizza,handleItems,total,cart}}>
                {children}
        </CartContext.Provider>
    )
    



}

