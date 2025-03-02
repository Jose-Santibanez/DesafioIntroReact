import { Header } from "./Header"
import { CardPizza } from "./CardPizza"

export const Home = ()=> {
    
    return (
        <>
            <Header />
        <main>
            <CardPizza img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgarage.pizza%2Fwp-content%2Fuploads%2F2020%2F03%2FPizza-Napoletana-Metodo-Margherita-scaled.jpg&f=1&nofb=1&ipt=bb4dc0edb7284b2845ad14eda655ce7a3e223eb70aa6f9507c8239f2d0306743&ipo=images"
                name="Napolitana"
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                price={5950}/>
            <CardPizza img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpatiosantaisabel.cl%2Fwp-content%2Fuploads%2F2024%2F05%2FIMG_9641-scaled-1.jpg&f=1&nofb=1&ipt=582e3c66ed0a791b388e94303fc6880a25e69f04f59d22a03ee5b6b0dbc86839&ipo=images"
                name="Española"
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                price={6950}/>
            <CardPizza img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2F2560x1707-px-food-pizza-1300341.jpg&f=1&nofb=1&ipt=4019c4f627335336fd49ccd2be6c1ad2b7ae25f64b41a3c0480d98d79f4e109a&ipo=images"
                name="Pepperoni"
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                price={6950}/>
           
        </main>
            
        </>
    )
            
        


}