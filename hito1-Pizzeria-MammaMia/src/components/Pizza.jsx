import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export const Pizza = () => {

    const {pizza,total, handleItems} = useContext(CartContext); 

    
    const primeraPizza = pizza[0] 

    return(
        <>
        <div className="contenedor-pizza">
            <div className="pizza">
                <img src={primeraPizza.img} alt="" />
                <div className="contenedor-ingredientes">
                    <ul className="ingredientes" >
                        {primeraPizza.ingredients.map((ingredient,index) =>(<li key={index}>{ingredient}</li>))}
                        </ul> 
                        <h1>{primeraPizza.name}</h1>
                        <p>${primeraPizza.price}</p>
                        <p>{primeraPizza.desc}</p> 
                        <button onClick={()=>handleItems(primeraPizza)}>Agregar</button>   
                </div>
                    
            </div>
        </div>
        </>
    )
}