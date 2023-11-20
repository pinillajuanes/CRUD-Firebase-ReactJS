import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import { doc } from 'firebase/firestore'
import withReactContent from 'sweetalert2-react-content'
import withReact from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = () => {
    const [libros, setLibros] = useState([])
    const librosCollecion = collection(db, "libros")
    const getLibros = async () => {
        const data = await getDocs(librosCollecion)
        setLibros(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        console.log(libros)
    }
    const deleteLibro = async (id) => {
      const libroDoc = doc(db, "libros", id)
      await deleteDoc(libroDoc)
      getLibros()
    }
    useEffect(() => {
        getLibros()
        // eslint-disable-next-line
    }, [])
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
          </div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Autor</th>
                <th scope="col">Nombre</th>
                <th scope="col">Género</th>
                <th scope="col">Año</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              { libros.map( (libro) => (
                <tr key={libro.id}>
                  <td>{ libro.autor }</td>
                  <td>{ libro.titulo }</td>
                  <td>{ libro.genero }</td>
                  <td>{ libro.publicacion }</td>
                  <td>
                    <button onClick={() => deleteLibro(libro.id)} className='btn btn-danger'>Borrar</button>
                  </td>

                </tr>
              ) ) }
            </tbody>
          </table>
        </div>
      </div>|
    </div>
    </>
  )
}

export default Show