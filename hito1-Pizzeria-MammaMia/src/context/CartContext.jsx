import { createContext, useEffect, useState } from "react"; //importamos el hook createContext para crear un ambito global

export const CartContext = createContext() // Creamos el contexto llamado CartContext


export const CartProvider = ({children})=> {
     
    const [pizza, setPizza] = useState([]);
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])    
    
    // Agregar items al carrito
     const handleItems = (itemPizza)=>{ 
          
        setCart([...cart,itemPizza]) 
        const precio = itemPizza.price;
        calculaTotal(precio,1)
        }   
    // Elimina item del carrito
    const eliminaItem = (itemPizza)=>{
        console.log(itemPizza)
        const filtrar = cart.filter(e=> e.id !== itemPizza.id) // filtra los todos los elementos distintos al valor pasado por parametro
        setCart(filtrar)
       calculaTotal(itemPizza.price,0)
    }
    // calculo del total a pagar
    const calculaTotal = (precio,operación)=> {
        if(operación === 1)setTotal(prev => prev + precio)
        else if (operación === 0)setTotal(prev => prev - precio)
    }
    // encuentra duplicados
    const encuentraDuplicados = (item)=> {
        const duplicados = cart.filtere(e=> e.id === item.id ) 
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
        <CartContext.Provider value={{pizza, setPizza,handleItems,total,cart, eliminaItem,encuentraDuplicados}}>
                {children}
        </CartContext.Provider>
    )
    



}

