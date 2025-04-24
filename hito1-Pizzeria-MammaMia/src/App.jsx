import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { FormRegistro } from './components/FormRegistro';
import { FormLogin } from './components/FormLogin';
import { Cart } from './components/Cart';
import { Pizza } from './components/Pizza';
import { NotFound } from './components/NotFound';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext'; 
import { UserPrivder } from './context/UserContext';


function App() {
  
    
  return  (
    <div className='contenedor'>
      <UserPrivder>
       <PizzaProvider>
        <CartProvider>
          <NavBar />
          <Footer/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registroForm' element={<FormRegistro />}/>
                <Route path='/loginForm' element={<FormLogin />}/>
                <Route path='/Pizza/:id' element={<Pizza />}/>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes> 
        </CartProvider>
      </PizzaProvider>   
    </UserPrivder>
      
     
    </div>
  )
  
}

export default App
