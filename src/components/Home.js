import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Link to={`/register`} className='btn btn-light'>Registrarse</Link>
      </div>
    </div>
  )
}

export default Home
