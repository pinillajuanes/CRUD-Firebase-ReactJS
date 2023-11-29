import React, { useState } from "react";
import { auth } from '../firebaseConfig/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationForm = ({ onRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
      setCurrentUser(userCredential.user); // Callback to parent component
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
      <button onClick={registerUser}>Registrarse</button>
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

export default RegistrationForm;
