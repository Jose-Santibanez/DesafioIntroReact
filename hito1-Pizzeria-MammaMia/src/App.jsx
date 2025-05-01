import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Navigate,Route, Routes, useNavigate } from 'react-router-dom';
import { FormRegistro } from './components/FormRegistro';
import { FormLogin } from './components/FormLogin';
import { Cart } from './components/Cart';
import { Pizza } from './components/Pizza';
import { NotFound } from './components/NotFound';
import { CartProvider } from './context/CartContext';
import { PizzaProvider } from './context/PizzaContext'; 
import { UserContext } from './context/UserContext';
import { useContext} from 'react';

import { Profile } from './components/Profile';


function App() {
  
  
    let { user } = useContext(UserContext);
  return  (
    <div className='contenedor'>
      
       <PizzaProvider>
        <CartProvider>
          <NavBar />
          <Footer/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registroForm' element={<FormRegistro />}/>
                <Route path='/loginForm' element={<FormLogin />}/>
                <Route path='/profile' element={ user ? < Profile /> : <Navigate to='/loginForm' /> }/>
                <Route path='/Pizza/:id' element={<Pizza />}/>
                <Route path='/Cart' element={<Cart />}/>
                <Route path='*' element={<NotFound />}/>
              </Routes> 
        </CartProvider>
      </PizzaProvider>   
    
      
     
    </div>
  )
  
}

export default App
