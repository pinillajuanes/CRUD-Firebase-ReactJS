import React from "react";
import RegistrationForm from "./RegistrationForm";
import '../styles/LoginRegister.css';
import DEA1 from '../assets/DEA1.png';
import DEA2 from '../assets/DEA2.png';
import DEA3 from '../assets/DEA3.png';

const Register = () => {
  return (
    <div className="PageRegister">
      <div className="logo">
        <img src={DEA1} alt="logo" />
      </div>
      <h2 className="HeaderPage">Registrarse</h2>
      <div className="containerFormImg">
        <div className="derFoto"><img src={DEA2} alt="fotoDer" /></div>
        <RegistrationForm />
        <div className="derFoto"><img src={DEA3} alt="fotoDer" /></div>
      </div>
     
    </div>
  );
}

export default Register;
