import { createContext, useState, useEffect } from "react";

// Creamos el contexto para manejar las peticiones a travez de su propio contexto
export const PizzaContext = createContext() 
// Creamos el proveedor que compartira nuestro contexto
export const PizzaProvider = (  { children }  ) => {
    // Creamos los estados para las pizzat y para el item Pizza
    const [pizzas, setPizzas] = useState([]);
    const [itemPizza, setItemPizza] = useState({}); 
    const [ loadingItem, setLoadingItem ] = useState(true);
    const [error, setError] = useState(null);

   /*  const navigate = useNavigate()
    const irPizza = (id) => {
        navigate(`/Pizza/${id}`)     
    } */
    // guardamos los endpoint a realizar la Petición GET
    const endpointPrincipal = 'http://localhost:5000/api/pizzas/'
    // Creamos una función Fetch utilizando await para consultar los endpoints
    const getPizzaData = async (  ) =>{
         try{
            // Realizamos la petición GET mediante Fetch
            const resPizzas = await fetch(endpointPrincipal);
            if(!resPizzas.ok) throw new Error("Error al obtener datos de la API");
            // Obtenemos la data extraida en formato JSON
            const pizzaData = await resPizzas.json();
            // Guardamos los json obtenidos en la función setter de los estados
            setPizzas(pizzaData);
           /*  setItemPizza(itemPizzaData) */
         }catch(error){
                console.error('Ocurrió un error al cargar los datos', error.message);
                setError('No se pudo cargar la lista de pizzas')
         }
    }
    const getItemBase = async (id = 'p003') =>{
         let endpointBase =  `http://localhost:5000/api/pizzas/${id}`;
        try{
            setLoadingItem(true)
            // obtenemos data mediante Fetch()
            const resItemBase = await fetch(endpointBase);
            if(!resItemBase.ok) throw new Error("Error al obtener datos de la API");
            // Parseamos lo obtenido a JSON()
            const dataItemBase = await resItemBase.json();
            setItemPizza(dataItemBase);
        }catch(err){
            console.error('Ocurrio un error al cargar los datos', err.message)
            setItemPizza(null)
        }finally{
            setLoadingItem(false)
        } 
    }
  /*    
    const getItemSeleccionado = async ( id )=>{
        const endpointSeleccion  = `http://localhost:5000/api/pizzas/${id}`;

        try{
            const resItem = await fetch(endpointSeleccion);
            const itemData = await resItem.json();
            setItemPizza(itemData);
        }catch(err){
            console.error('Ocurrio un error al cargar los datos', err.message)
        }
    }
     */
    /* const getItemData = async ( id = 'p001') => {
        console.log(id)
        if(id === 'p001' ){
               
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
           
        }else{
                // guardamos los endpoint a realizar la Petición GET
            endpointItem =  `http://localhost:5000/api/pizzas/${id}`
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
    } */
    
    // Utilizamos el hook useEffect() para controlar las peticiónes realizadas
    // esta solo se realice en la carga inicial y muestra en el DOM (fase montaje)
    useEffect(()=>{
        getPizzaData()
       /*  getItemData() */
        getItemBase()
       /*  getItemSeleccionado() */
    },[])
    
    return(
        <PizzaContext.Provider value={{ pizzas, itemPizza, getItemBase, loadingItem, error }}>
            { children }
        </PizzaContext.Provider>
    )
}