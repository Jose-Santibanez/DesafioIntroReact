import { Header } from "./Header"
import { CardPizza } from "./CardPizza"
import {  useState, useEffect } from "react" 

export const Home = ()=> {
  const [galeria, setGaleria] = useState([]); // creamos el estado para guardar el la data
      
  const api = "http://localhost:5000/api/pizzas";   // guardamos en url el endPoint de la API
      
      const getData = async () => {
            const response = await fetch(api) ;// realizamos la petición con fetch y guardamos en reponse lo obtenido del endPoint 
             const data = await response.json(); //parseamos a JSON la data obtenida de response
             
             setGaleria([...data]) // Guardamos dentro del setPizza en el array vacio la data, (pizza = valor actual[data] )        
             
      }
      
      useEffect(() =>{ 
          getData()
      }, []);
       // guardar primer elemento en una variable
       
    return (
        <>
            <Header />
        <main>
            <div className="galery">
                {
                    galeria.map(producto =>(
                        <CardPizza key={producto.id} img={producto.img} name={producto.name} ingredients={producto.ingredients}
                        price={producto.price}/>
                     ))        
                } 
            </div>
        </main>
            
        </>
    )
            
        


}