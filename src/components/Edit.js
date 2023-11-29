import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import { auth } from '../firebaseConfig/firebase';


const Edit = () => {
  const [titulo, setTitulo] = useState('')
  const [detalles, setDetalles] = useState('')
  const navigate = useNavigate()
  const tareasCollecion = collection(db, "tareas")
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    const tarea = doc(db, "tareas", id)
    const data = {
      titulo: titulo, detalles: detalles, usuario: auth.currentUser.uid, fecha_creacion: serverTimestamp()
    }
    await updateDoc(tarea, data)
    navigate("/showall")
  }
  
  const getTareaByID = async (id) => {
    const tarea = await getDoc(doc(db, "tareas", id))
    if(tarea.exists()) {
      setTitulo(tarea.data().titulo)
      setDetalles(tarea.data().detalles)
    }else{
      console.log("No existe la tarea")
    }
  }

  useEffect(() => {
    getTareaByID(id)
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Editar tarea</h1>
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
                  Guardar
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit
