import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, query, where, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';
import Swal from 'sweetalert2';
import { doc } from 'firebase/firestore';
import withReactContent from 'sweetalert2-react-content';
import { auth } from '../firebaseConfig/firebase';
import DEA1 from '../assets/DEA1.png';
import DEA6 from '../assets/DEA6.png';

import '../styles/showall.css';

const MySwal = withReactContent(Swal);

const Show = () => {
  const [tareas, setTareas] = useState([]);
  const tareasCollection = collection(db, "tareas");

  const getTareas = async () => {
    if (!auth.currentUser) {
      console.log("No hay usuario autenticado");
      return;
    }

    const q = query(tareasCollection, where("usuario", "==", auth.currentUser.uid));
    const data = await getDocs(q);
    setTareas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const deleteTarea = async (id) => {
    const tareaDoc = doc(db, "tareas", id);
    await deleteDoc(tareaDoc);
    getTareas();
  };

  const changeComplete = async (id) => {
    const tareaDoc = doc(db, "tareas", id);
    const tarea = await getDoc(tareaDoc);
    await updateDoc(tareaDoc, { completado: !tarea.data().completado });
    getTareas();
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, bórralo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTarea(id);
        MySwal.fire(
          '¡Borrado!',
          'La tarea ha sido borrada',
          'success'
        );
      }
    });
  };

  useEffect(() => {
    getTareas();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='PageShowall'>
    <div id='up'></div>
      <div id='down'></div>
      <div id='left'></div>
      <div id='right'></div>
      <div className="container">
        
        <div className="logo">
          <img src={DEA1} alt="logo" />
        </div>
      
        <div className="rowoooo">
          <div className='supCOloo'>
          <div className='headerrr'>
          <h1 className='HeaderPrincipal'>Mi espacio de tareas</h1>
          <Link to="/create" className="botnCrear">Añadir tarea</Link>
          </div>

            <div className="colooooo">
              <div className="table-container">
                <table className="table table-light table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Título</th>
                      <th scope="col">Detalles</th>
                      <th scope="col">Creación</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tareas.map((tarea) => {
                      const buttonColor = tarea.completado ? 'btn-success' : 'btn-info';
                      return (
                        <tr key={tarea.id}>
                          <td style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}>{tarea.titulo}</td>
                          <td>{tarea.detalles}</td>
                          <td>{tarea.fecha_creacion.toDate().toLocaleString()}</td>
                          <td>
                            <button onClick={() => changeComplete(tarea.id)} className={`btn ${buttonColor}`}><i className='fa fa-check-circle'></i></button>
                            <Link to={`/edit/${tarea.id}`} className='btn btn-light'><i className='fa-solid fa-pencil'></i></Link>
                            <button onClick={() => confirmDelete(tarea.id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
            </div>
            </div>
          <div className='Pomodoro'>
            
            <div className="logooo">
            
              <img src={DEA6} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
