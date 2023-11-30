import React from "react";
import LoginForm from "./LoginForm";
import '../styles/LoginRegister.css';
import DEA1 from '../assets/DEA1.png';
import DEA2 from '../assets/DEA2.png';
import DEA3 from '../assets/DEA3.png';


const Login = () => {
  return (
    <div className="PageLogin">
      <div className="logo">
        <img src={DEA1} alt="logo" />
      </div>
      <h2 className="HeaderPage">Iniciar Sesión</h2>
      <div className="containerFormImg">
        <div className="derFoto"><img src={DEA2} alt="fotoDer" /></div>
        <LoginForm />
        <div className="derFoto"><img src={DEA3} alt="fotoDer" /></div>
      </div>
     
    </div>
  );
}

export default Login;
