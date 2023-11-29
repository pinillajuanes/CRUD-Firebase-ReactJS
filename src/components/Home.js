import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Link to={`/register`} className='btn btn-light'>Registrarse</Link>
        <h1>MindFlow Tasks</h1>
        <h3>Descubre la armonía entre tu mente y tus tareas con MindFlow Tasks. Simplifica tu día, encuentra el flujo perfecto y eleva tu productividad a nuevas alturas.</h3>
        <p>Con herramientas diseñadas para nutrir tu creatividad, MindFlow Tasks es tu compañero ideal para gestionar tus actividades diarias de manera serena y eficiente. Transforma la gestión de tareas en una experiencia tranquila y fluida. ¡Regístrate hoy y deja que tu productividad fluya con facilidad!</p>
      </div>
    </div>
  )
}

export default Home
