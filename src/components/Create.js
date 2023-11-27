import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [autor, setAutor] = useState('')
  const [titulo, setTitulo] = useState('')
  const [genero, setGenero] = useState('')
  const [publicacion, setPublicacion] = useState(0)
  const navigate = useNavigate()
  const librosCollecion = collection(db, "libros")
  const store = async (e) => {
    e.preventDefault()
    await addDoc(librosCollecion, {
      autor: autor, titulo: titulo, genero: genero, publicacion: publicacion
    })
    navigate('/')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Añadir un libro</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Autor</label>
              <input
                type='text'
                className='form-control'
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
              />
            </div>
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
              <label className='form-label'>Género</label>
              <input
                type='text'
                className='form-control'
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Año</label>
              <input
                type='number'
                className='form-control'
                value={publicacion}
                onChange={(e) => setPublicacion(e.target.value)}
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
