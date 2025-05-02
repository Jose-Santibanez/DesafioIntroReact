import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { PizzaProvider } from './context/PizzaContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
       <PizzaProvider>  
          <CartProvider>
              <UserProvider>
                  <App /> 
              </UserProvider>   
          </CartProvider> 
        </PizzaProvider>  
    </Router>
  </StrictMode>
)
