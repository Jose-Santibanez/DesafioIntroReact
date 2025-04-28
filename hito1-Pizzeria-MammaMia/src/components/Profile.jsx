
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../context/UserContext';


export const Profile = () => {

    const { user } = useContext(UserContext)
    
  return (
    <div className='contenedor-profile'> 

    <Card className='profile'>
        <Card.Body>
            <Card.Title >Email:{user.email}</Card.Title>
            <Card.Text>Perfil de usario encontrado</Card.Text>
            <Button>Cerrar Sesion</Button>
        </Card.Body>
    </Card>
    </div>
  )
}


