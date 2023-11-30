import React, { useState } from "react";
import { useNavigate, Link} from 'react-router-dom'
import '../styles/formsLogRegister.css';
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
    <div className="containForm">
      <label htmlFor="email" className="labelsInputs">Correo Electronico</label>
      <input className="inputForms" type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
      <br></br>
      <label className="labelsInputs" htmlFor="password" >Contraseña</label>
      <input className="inputForms" type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
      <br></br>
      <button onClick={loginUser} className="botnInicioSesion">Iniciar sesión</button>
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
      <div className="yatienes"><p>¿No tienes una cuenta aún? </p><Link to={`/register`} className="linkaotro" >Registrarse</Link></div>

    </div>
  );
};

export default LoginForm;
