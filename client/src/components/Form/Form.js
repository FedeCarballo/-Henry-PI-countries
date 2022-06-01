import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formcreate} from './Form.module.css'

function Form() {

    const [formcreate,setformcreate] = useState({name:" ", difficulty:[], duration:" ", season:[], country:"", imagen:""})

    const dispatch = useDispatch()

    const state = useSelector(state => state.Allcountries)

    function handleSelectDificult(e){
      e.preventDefault();
      setformcreate({
        ...formcreate,
        difficulty: [... formcreate.difficulty, e.target.value]
      })
    }
    function handleSelectSeason(e){
      e.preventDefault();
      setformcreate({
        ...formcreate,
        season: [...formcreate.season, e.target.value]
      })
    }
    function handleSubmit(e){
      e.preventDefault();
      dispatch(createActivity(formcreate))
      setformcreate({name:" ", difficulty:[], duration:"", season:[], countries:"", imagen:"", country:""})
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
              <label>Name:</label><input 
              type="text" value={formcreate.name} name="name" onChange={e => onChange(e)}/>

              <label>Difficulty:</label>
              {/* <input type="text" value={formcreate.difficulty} name="difficulty" onChange={e => onChange(e)}/> */}
              <select name='dificulty' onChange={e => handleSelectDificult(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
              <label>Duration:</label><input type="number"  min="1" max="24" value={formcreate.duration} name="duration" onChange={e => onChange(e)}/> 
              {/* <label>Season:</label><input type="text" value={formcreate.season} name="season" onChange={e => onChange(e)}/> */}
              <label>Season:</label>
              <select onChange={e => handleSelectSeason(e)}>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Autum">Autumn</option>
              </select>
              <label>image:</label><input type="text" value={formcreate.imagen} name="imagen" onChange={e => onChange(e)}/>
              <label>countries:</label>
              <select>
                {
                  state.map(e=> 
                   ( <option value={e.name}>{e.name}</option>)
                  )
                }
              </select>

              <button type='submit'>Create Activity</button> 
          </form>
      </div>
    </div>
  )


}

export default Form