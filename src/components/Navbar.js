import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import DEA1 from '../assets/DEA1.png'

const Navbar = () => {
  return (
    <div className='back'>
      <nav>
        <div className="logo">
            <img src={DEA1} alt="logo" />
        </div>
        <ul className='nav-list'>
            <li>¿Qué es?</li>
            <li>Recursos</li>
            <li></li>
            <Link to={`/register`} className='btn btn-light'>Iniciar Sesión</Link>
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar
