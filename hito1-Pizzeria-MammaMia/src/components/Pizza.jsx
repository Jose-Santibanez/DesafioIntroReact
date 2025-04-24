import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router-dom";

export const Pizza = () => {
    const { id } = useParams()
    const { itemPizza, getItemBase, loadingItem, error } = useContext(PizzaContext);
    const { handleItems } = useContext(CartContext)
  
    useEffect(()=>{
        getItemBase[id]
    },[id])

    if(loadingItem) return <p>Cargando Pizza...</p> // Aqui controlamos que la vista no falle al recargar la página
    if(error) return <p>Error: {error}</p>
    if(!itemPizza) return <p>No se encuentra la pizza.</p>
     
    return(
        <>
        <div className="contenedor-pizza">
            <div className="pizza">
                <img src={itemPizza.img} alt="" />
                <div className="contenedor-ingredientes">               
                     <ul className="ingredientes" >
                        {itemPizza.ingredients.join(', ')}
                        </ul>  
                        <h1>{itemPizza.name}</h1>
                        <p>{itemPizza.price}</p>
                        <p>{itemPizza.desc}</p> 
                        <button onClick={()=>handleItems(itemPizza)}>Agregar</button>   
                </div>    
            </div>
        </div>
        </>
    )
}