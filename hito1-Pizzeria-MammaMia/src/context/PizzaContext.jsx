import { createContext, useState, useEffect } from "react";

// Creamos el contexto para manejar las peticiones a travez de su propio contexto
export const PizzaContext = createContext() 

// Creamos el proveedor que compartira nuestro contexto

export const PizzaProvider = ({children}) => {
    // Creamos los estados para las pizzat y para el item Pizza
    const [pizzas, setPizzas] = useState([]);
    const [itemPizza, setItemPizza] = useState([]);

    // guardamos los endpoint a realizae la Petición GET
    const endpointPizzas = 'http://localhost:5000/api/pizzas/'
    const endpointItem = 'http://localhost:5000/api/pizzas/p001'
    
    // Creamos una función Fetch utilizando await para consultar los endpoints
    const getData = async () =>{
         try{
            // Realizamos la petición GET mediante Fetch
            const resPizzas = await fetch(endpointPizzas);
            const resItemPizzas = await fetch(endpointItem);
         
            if(!resPizzas.ok || !resItemPizzas.ok)
            {
                 throw new Error("Error al obtener datos de la API");
            }
            // Obtenemos la data extraida en formato JSON
            const pizzaData = await resPizzas.json();
            const itemPizzaData = await resItemPizzas.json(); 

            // Guardamos los json obtenidos en la función setter de los estados
            setPizzas(pizzaData);
            setItemPizza(itemPizzaData)
         }catch(error){
                console.error('Ocurrió un error al cargar los datos', error.message);
         }
        
    }
    console.log('estos es 1 item :',itemPizza.constructor.name)
    // Utilizamos el hook useEffect() para controlar las peticiónes realizadas
    // esta solo se realice en la carga inicial y muestra en el DOM (fase montaje)
    useEffect(()=>{
        getData()
    },[])
    
    return(
        <PizzaContext.Provider value={{pizzas,itemPizza}}>
            { children }
        </PizzaContext.Provider>
    )
}