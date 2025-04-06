import { useEffect, useState } from "react"


export const Pizza = () => {

     const [pizza, setPizza] = useState({}); 

    const api = "http://localhost:5000/api/pizzas/p001";   // guardamos en url el endPoint de la API

    const getData = async () => {
        const response = await fetch(api) ;// realizamos la petición con fetch y guardamos en reponse lo obtenido del endPoint
        
        const data = await response.json(); //parseamos a JSON la data obtenida de response
        
        setPizza(data) // Guardamos dentro del setPizza en el array vacio la data, (pizza = valor actual[data] )
    
    }
    
    
    useEffect(() =>{ 
        getData()
    }, []);
     // guardar primer elemento en una variable

     /* console.log("esto es"+pizza.constructor.name)  */
          
     
    
    return(
        <>
        <div className="contenedor-pizza">
            <div className="pizza">
                <img src={pizza.img} alt="" />
                <div className="contenedor-ingredientes">
                    <ul className="ingredientes" >
                        {pizza.ingredients.map((ingredient,index) =>(<li key={index}>{ingredient}</li>))}
                        </ul> 
                        <h1>{pizza.name}</h1>
                        <p>${pizza.price}</p>
                        <p>{pizza.desc}</p> 
                        <button>Agregar</button>   
                </div>
                    
            </div>
        </div>
        </>
    )
}