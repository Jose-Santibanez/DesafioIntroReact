import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Creamos el contexto para manejar las peticiones a travez de su propio contexto
export const PizzaContext = createContext() 

// Creamos el proveedor que compartira nuestro contexto

export const PizzaProvider = ({children}) => {
    // Creamos los estados para las pizzat y para el item Pizza
    const [pizzas, setPizzas] = useState([]);
    const [itemPizza, setItemPizza] = useState([]);
    
   

   
    // guardamos los endpoint a realizar la Petición GET
    const endpointPizzas = 'http://localhost:5000/api/pizzas/'
    
    
    // Creamos una función Fetch utilizando await para consultar los endpoints
    const getPizzaData = async () =>{
         try{
            // Realizamos la petición GET mediante Fetch
            const resPizzas = await fetch(endpointPizzas);
         
            if(!resPizzas.ok)
            {
                 throw new Error("Error al obtener datos de la API");
            }
            // Obtenemos la data extraida en formato JSON
            const pizzaData = await resPizzas.json();
           

            // Guardamos los json obtenidos en la función setter de los estados
            setPizzas(pizzaData);
           /*  setItemPizza(itemPizzaData) */
         }catch(error){
                console.error('Ocurrió un error al cargar los datos', error.message);
         }
        
    }

    const getItemData = async ( id = 'p001' ) => {

         // guardamos los endpoint a realizar la Petición GET
        const endpointItem = `http://localhost:5000/api/pizzas/${id}`
      
         
        try{
            // Realizamos la petición con fetch()
             const resItemPizza = await fetch(endpointItem)
             if(!resItemPizza.ok)
             {
                throw new Error('Error al obtener datos de la api');
             }
             const itemPizzaData = await resItemPizza.json(); 

             setItemPizza(itemPizzaData);
             
             
        }catch(error){
            console.error('Ocurrió un error al cargar los datos', error.message);
        }
       

  
    }
   /*  const irPizza = (id = 'p001') => {
        getItemData(id)
        navigate(`/Pizza/${id}`)
        
    } */
    
    // Utilizamos el hook useEffect() para controlar las peticiónes realizadas
    // esta solo se realice en la carga inicial y muestra en el DOM (fase montaje)
    useEffect(()=>{
        getPizzaData()
        getItemData()
    
    },[])
    
    return(
        <PizzaContext.Provider value={{pizzas, itemPizza, getItemData}}>
            { children }
        </PizzaContext.Provider>
    )
}