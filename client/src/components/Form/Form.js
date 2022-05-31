import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formcreate} from './Form.module.css'

function Form() {

    const [formcreate,setformcreate] = useState({name:" ", difficulty:[], duracion:" ", temporada:[], country:"", imagen:""})

    const dispatch = useDispatch()

    function handleSelect(e){
      e.preventDefault();
      setformcreate({
        ...formcreate,
        difficulty: [... formcreate.difficulty, e.target.value]
      })
    }
    function handleSubmit(e){
      e.preventDefault();
      dispatch(createActivity(formcreate))
      setformcreate({name:" ", difficulty:[], duracion:[], temporada:[], countries:"", imagen:"", country:""})
    }
    function onChange(e){
      e.preventDefault();
      setformcreate({...formcreate,[e.target.name]: [e.target.value]})
    }
  return (
    <div>
        <Navbar />
      <div className={Form__container}>
            <div>
              <h1>Create Activities</h1>
            </div>
          <form className={Formcreate}  onSubmit={e => handleSubmit(e)}>
              <label>Name:</label><input type="text" value={formcreate.name} name="name" onChange={e => onChange(e)}/>

              <label>Difficulty:</label>
              {/* <input type="text" value={formcreate.difficulty} name="difficulty" onChange={e => onChange(e)}/> */}
              <select name='dificulty' onChange={e => handleSelect(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
              <label>Duration:</label><input type="number"  min="1" max="24" value={formcreate.duracion} name="duracion" onChange={e => onChange(e)}/> 
              {/* <label>Season:</label><input type="text" value={formcreate.temporada} name="temporada" onChange={e => onChange(e)}/> */}
              <label>Season:</label>
              <select>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Autum">Autumn</option>
              </select>
              <label>image:</label><input type="text" value={formcreate.imagen} name="imagen" onChange={e => onChange(e)}/>
              <label>countries:</label><input type="text" value={formcreate.country} name="country" onChange={e => onChange(e)}/>
              <button type='submit'>Create Activity</button> 
          </form>
      </div>
    </div>
  )


}

export default Form