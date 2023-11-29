import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebaseConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const loginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      setCurrentUser(userCredential.user); // Callback to parent component
      navigate('/showall')
    } catch (error) {
      setError(error.message);
    }
    
  }

  return (
    <div>
      <label htmlFor="email">Correo Electronico</label>
      <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
      <button onClick={loginUser}>Iniciar sesión</button>
      {currentUser && (
        <div>
          <p>Usuario autenticado: {currentUser.email}</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
