import React, { useState } from "react";
import { auth } from '../firebaseConfig/firebase';
import '../styles/formsLogRegister.css';
import { useNavigate, Link} from 'react-router-dom'

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
    <div className="containForm">
      <label htmlFor="email" className="labelsInputs">Correo Electronico</label>
      <input className="inputForms" type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
      <br></br>
      <label htmlFor="password" className="labelsInputs">Contraseña</label>
      <input className="inputForms" type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
      <br></br>
      <button onClick={registerUser} className="botnRegistro">Registrarse</button>
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
      <br></br>
      <div className="yatienes"><p>¿Ya tienes una cuenta? </p><Link to={`/login`} className="linkaotro" >Iniciar sesión</Link></div>

    </div>
  );
};

export default RegistrationForm;
