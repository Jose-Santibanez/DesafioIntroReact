import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { FormRegistro } from './components/FormRegistro';
function App() {
  return  (
    <div className='contenedor'>
      <NavBar/>
      
      <Footer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registroForm" element={<FormRegistro/> }/>
      </Routes>
      
    </div>
  )
  
}

export default App
