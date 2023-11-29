import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Navbar from './Navbar';
import bomb from '../assets/bomb.png';

const Home = () => {
  return (
    <div className='back'>
      <div id='up'></div>
      <div id='down'></div>
      <div id='left'></div>
      <div id='right'></div>
      <Navbar></Navbar>
      <div className='details'>
        <div className='text'>
            <h3 id='slogan'>Descubre la armonía entre tu mente y tus tareas con MindFlow Tasks</h3>
            <br></br>
            <br></br>
            <p id='explicacion'>MindFlow Tasks es tu compañero ideal para gestionar tus actividades diarias de manera serena y eficiente. Transforma la gestión de tareas en una experiencia tranquila y fluida. ¡Regístrate hoy y deja que tu productividad fluya con facilidad!</p>
            <br></br>
            <Link to={`/register`} className='btn btn-light' >Registrarse</Link>
            </div> 
        <div className='foto'>
            <img src={bomb} alt="bombilla" />
        </div>     
      </div>
    </div>
  )
}

export default Home
