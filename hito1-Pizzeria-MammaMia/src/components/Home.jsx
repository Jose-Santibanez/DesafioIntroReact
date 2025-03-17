import { Header } from "./Header"
import { CardPizza } from "./CardPizza"
import {pizzas}  from '../pizzas'
import { useState } from "react"

export const Home = ()=> {
    
    const [ galeria, setGaleria] = useState(pizzas)

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