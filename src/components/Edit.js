import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'


const Edit = () => {
  const [autor, setAutor] = useState('')
  const [titulo, setTitulo] = useState('')
  const [genero, setGenero] = useState('')
  const [publicacion, setPublicacion] = useState(0)
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    const libro = doc(db, "libros", id)
    const data = {
      autor: autor, titulo: titulo, genero: genero, publicacion: publicacion
    }
    await updateDoc(libro, data)
    navigate("/")
  }
  
  const getLibroByID = async (id) => {
    const libro = await getDoc(doc(db, "libros", id))
    if(libro.exists()) {
      setAutor(libro.data().autor)
      setTitulo(libro.data().titulo)
      setGenero(libro.data().genero)
      setPublicacion(libro.data().publicacion)
    }else{
      console.log("No existe el libro")
    }
  }

  useEffect(() => {
    getLibroByID(id)
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>Editar libro</h1>
          <form onSubmit={update}>
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
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit
