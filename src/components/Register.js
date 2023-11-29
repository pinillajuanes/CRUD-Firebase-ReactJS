import React from "react";
import RegistrationForm from "./RegistrationForm";
import '../styles/LoginRegister.css';
import DEA1 from '../assets/DEA1.png';

const Register = () => {
  return (
    <div>
      <div className="logo">
        <img src={DEA1} alt="logo" />
      </div>
      <h2 className="HeaderPage">Registro en MindFlow Taks</h2>
      <RegistrationForm />
    </div>
  );
}

export default Register;
