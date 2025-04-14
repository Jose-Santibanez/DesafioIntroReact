import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";

export const Pizza = () => {

    const {total, handleItems} = useContext(CartContext); 
    const {itemPizza} = useContext(PizzaContext);
  
    return(
        <>
        <div className="contenedor-pizza">
            <div className="pizza">
                <img src={itemPizza.img} alt="" />
                <div className="contenedor-ingredientes">
                    <ul className="ingredientes" >
                        {itemPizza.ingredients.map((ingredient,index) =>(<li key={index}>{ingredient}</li>))}
                        </ul> 
                        <h1>{itemPizza.name}</h1>
                        <p>${itemPizza.price}</p>
                        <p>{itemPizza.desc}</p> 
                        <button onClick={()=>handleItems(itemPizza)}>Agregar</button>   
                </div>
                    
            </div>
        </div>
        </>
    )
}