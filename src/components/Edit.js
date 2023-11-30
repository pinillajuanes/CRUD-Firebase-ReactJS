import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import '../styles/createdit.css';
import DEA1 from '../assets/DEA1.png';

const Edit = () => {
  const [titulo, setTitulo] = useState('');
  const [detalles, setDetalles] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const tarea = doc(db, "tareas", id);
    const data = {
      titulo: titulo,
      detalles: detalles,
    };
    await updateDoc(tarea, data);
    navigate("/showall");
  };

  const getTareaByID = async (id) => {
    const tarea = await getDoc(doc(db, "tareas", id));
    if (tarea.exists()) {
      setTitulo(tarea.data().titulo);
      setDetalles(tarea.data().detalles);
    } else {
      console.log("No existe la tarea");
    }
  };

  useEffect(() => {
    getTareaByID(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
    <div className="logo">
        <img src={DEA1} alt="logo" />
      </div>
      <div className='row'>
        <div className='containparaCreateyEdit'>
          <h1 className='HeaderPage'>Editar tarea</h1>
          <form onSubmit={update}>
            <div className='mb-3'>
              <label className='form-label'>Título</label>
              <input
                type='text'
                className='form-control'
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Detalles</label>
              <input
                type='text'
                className='form-control'
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
              />
            </div>
            <div className='d-grid gap-2'>
              <button type='submit' className='btn btn-primary'>
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
