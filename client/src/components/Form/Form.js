import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formulario} from './Form.module.css'

function Form() {
    const [formulario,setformulario] = useState({nombre:" ", dificultad:" ", duracion:" ", temporada:"", countries:"", imagen:""})

    const dispatch = useDispatch()

    function handleSubmit(e){
      e.preventDefault();
      dispatch(createActivity(formulario))
      setformulario({nombre:" ", dificultad:" ", duracion:" ", temporada:"", countries:"", imagen:"", countries:""})
    }
    function onChange(e){
      e.preventDefault();
      setformulario({...formulario,[e.target.name]: [e.target.value]})
    }
  return (
    <div>
        <Navbar />
      <div className={Form__container}>
            <div>
              <h1>Create Activities</h1>
            </div>
          <form className={Formulario}  onSubmit={e => handleSubmit(e)}>
              <label>Name:</label><input type="text" value={formulario.nombre} name="nombre" onChange={e => onChange(e)}/>

              <label>Dificult:</label>
              <br />
              <input type="radio" value={formulario.dificultad} name="dificultad" onChange={e => onChange(e)}/>
              <label>1</label>
              <label>Duration:</label><input type="text" value={formulario.duracion} name="duracion" onChange={e => onChange(e)}/>

              <label>Season:</label><input type="text" value={formulario.temporada} name="temporada" onChange={e => onChange(e)}/>

              <label>image:</label><input type="text" value={formulario.imagen} name="imagen" onChange={e => onChange(e)}/>

              <label>countries:</label><input type="text" value={formulario.countries} name="countries" onChange={e => onChange(e)}/>

              <button type='submit'>Create Activity</button>

          </form>
      </div>
    </div>
  )


}

export default Form