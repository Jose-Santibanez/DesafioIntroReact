import { Header } from "./Header"
import { CardPizza } from "./CardPizza"
import { useContext } from "react" 
 
import { PizzaContext } from "../context/PizzaContext" // Importamos contexto a consumir
export const Home = ()=> {
    const {pizzas} = useContext(PizzaContext) // Consumimos el contexto
    
    return (
        <>
            <Header />
        <main>
            <div className="galery">
                {
                    pizzas.map(producto =>(
                        <CardPizza props={producto}/>
                     ))        
                } 
            </div>
        </main>
            
        </>
    )
            
        


}