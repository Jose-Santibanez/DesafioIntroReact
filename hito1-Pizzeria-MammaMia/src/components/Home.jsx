import { Header } from "./Header"
import { CardPizza } from "./CardPizza"

/* import {pizzas}  from '../pizzas' */
import {  useEffect, useState } from "react"

export const Home = ()=> {
    
    const [ galeria, setGaleria] = useState([])
    
    const url = "http://localhost:5000/api/pizzas/";  

    const getData = async () => {
        const response = await fetch (url);
        const data = await response.json();

        setGaleria(data)
        console.log(data)
    }

    useEffect(() =>{ 
        getData()
        
    }, []);
    

    return (
        <>
            <Header />
        <main>
            <div className="galery">
                {
                    galeria.map(producto =>(
                        <CardPizza key={producto.id} img={producto.img} name={producto.name} desc={producto.desc} ingredients={producto.ingredients}
                        price={producto.price}/>
                     ))        
                }
            </div>
        </main>
            
        </>
    )
            
        


}