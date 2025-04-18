import { Header } from "./Header"
import { CardPizza } from "./CardPizza"
import { useContext } from "react" 
import { CartContext } from "../context/CartContext"  // Importamos contexto a consumir

export const Home = ()=> {
    const {pizza} = useContext(CartContext) // Consumimos el contexto
    
    return (
        <>
            <Header />
        <main>
            <div className="galery">
                {
                    pizza.map(producto =>(
                        <CardPizza props={producto}/>
                     ))        
                } 
            </div>
        </main>
            
        </>
    )
            
        


}