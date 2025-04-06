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

function App() {
  
    
  return  (
    <div className='contenedor'>
      <NavBar />
      
      <Footer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registroForm' element={<FormRegistro />}/>
        <Route path='/loginForm' element={<FormLogin />}></Route>
        <Route path='/Pizza' element={<Pizza />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      
    </div>
  )
  
}

export default App
