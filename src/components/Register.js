import React, {useState} from 'react'
import { useNavigate, Link} from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Register = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const navigate = useNavigate()
  const usuariosCollecion = collection(db, "usuarios")
  const addUser = async (e) => {
    e.preventDefault()
    await addDoc(usuariosCollecion, {
      username: nombre, email: email, password: contrasena})
    navigate('/showall')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Regístrate en MindFLow Tasks</h1>
          
          <form onSubmit={addUser}>
            
            <div className='mb-3'>
              <label className='form-label'>Nombre de usuario</label>
              <input
                type='text'
                className='form-control'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Correo electrónico</label>
              <input
                type='text'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Contraseña</label>
              <input
                type='text'
                className='form-control'
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>

            <div className='d-grid gap-2'>
              <button type='submit' className='btn btn-primary'>
                Registrarme
              </button>
            </div>
          </form>
          Ya tienes una cuenta? <Link to={`/login`} className='btn btn-light'>Inicia sesión</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
