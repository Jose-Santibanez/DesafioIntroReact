import { PizzaContext } from "../context/PizzaContext";
import { useState, useContext } from "react";


export const PizzaDetalle = ( ) => {

 const {handleItems} = useContext(CartContext);
 const {itemPizza} = useContext(PizzaContext);
    
    if(!itemPizza || itemPizza.length === 0 ){
        return <p> Cargando item-.....</p>
    }
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