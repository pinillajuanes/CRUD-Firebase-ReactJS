// Importa las funciones necesarias de Firebase
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Intenta iniciar sesión con el correo electrónico y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, email, password);

      console.log('Inicio de sesión exitoso');
      navigate('/showall'); // Redirige a la página después del inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión', error.message);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Iniciar Sesión en MindFLow Tasks</h1>

          <form onSubmit={handleLogin}>
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
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='d-grid gap-2'>
              <button type='submit' className='btn btn-primary'>
                Iniciar Sesión
              </button>
            </div>
          </form>

          ¿No tienes una cuenta?{' '}
          <Link to={`/register`} className='btn btn-light'>
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
