import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import { auth } from '../firebaseConfig/firebase';

const Create = () => {
  const [titulo, setTitulo] = useState('')
  const [detalles, setDetalles] = useState('')
  const navigate = useNavigate()
  const tareasCollecion = collection(db, "tareas")
  const store = async (e) => {
    e.preventDefault()
    await addDoc(tareasCollecion, {
      titulo: titulo, detalles: detalles, usuario: auth.currentUser.uid, fecha_creacion: serverTimestamp(),

    })
    navigate('/showall')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Añadir una tarea</h1>
          <form onSubmit={store}>
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
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
