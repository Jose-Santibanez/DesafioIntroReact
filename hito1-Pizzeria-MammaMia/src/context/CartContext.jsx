import { createContext, useEffect, useState } from "react"; //importamos el hook createContext para crear un ambito global

export const CartContext = createContext() // Creamos el contexto llamado CartContext


export const CartProvider = ({children})=> {
    // Creamos los estados que vamos a manejar
    const [pizza, setPizza] = useState([]);
   
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])    
    
    // Agregar items al carrito
     const handleItems = (itemPizza)=>{ 
            const index = cart.findIndex((item) => item.id === itemPizza.id); // Buscamos el elemento  existe? nos devuelve el indice : -1 
            if(index !== -1){ // si es distinto a -1 (es decir encontro el indice)
                const newCart = [...cart]  // agregamos un nuevo arreglo usando spread operator y lo guardamos en newCart
                newCart[index].cantidad += 1;  // buscamos dentro del array con el indice encontrado accedemos a la propiedad cantidad y le sumamos 1
                setCart(newCart);    // agregamos el nuevo carrito alterado en la propiedad cantidad de ese producto en esa posición(newCart[index]) al estado Cart 
            }  
            else{
                setCart([...cart,{...itemPizza,cantidad : 1}]); // de lo contrario es -1, no encontro nada agrega un nuevo array del carrito agregando el nuevo producto y se crea la nueva propiedad en 1  (cantidad : 1)
            }
        } 
        
        
    // Elimina item del carrito
    const eliminaItem = (itemPizza)=>{
        const existe = cart.find(e => e.id == itemPizza.id) // buscamos el primer elemento que encuentra con el id del objeto pasado por parametro,nos devuelve el objeto encontrado
        if(existe.cantidad > 1){ // si encuentra el valor y cantidad es mayor a 1 
            const newCart = cart.map( e => e.id === itemPizza.id 
            ? { ...e, cantidad: e.cantidad - 1 } : e)
            setCart(newCart)
        }else{
            const newCart = cart.filter( e=> e.id !== itemPizza.id)
            setCart(newCart)
        }
    }
   

    const calcularTotal = () => {
        const totalCalculado = cart.reduce((acum,item)=>{
            return acum + item.price * item.cantidad;
        },0)
        setTotal(totalCalculado)
    }
 
  /*   
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
        
    }; */
    useEffect(()=>{
        
        calcularTotal()
    },[cart]);

    return(
        <CartContext.Provider value={{handleItems,total,cart, eliminaItem}}>
                {children}
        </CartContext.Provider>
    )
    



}

