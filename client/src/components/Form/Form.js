import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity, getAllCountries } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formcreate} from './Form.module.css'

function Form() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.countries)

    const [input, setinput] = useState({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      imagen: '',
      countries: [],
    })

    useEffect(()=>{
      dispatch(getAllCountries())
   },[]);

   function handleChange(e){
    e.preventDefault();
     console.log(e.target.value);
    setinput({
      ...input,
      [e.target.name]: [e.target.value]
    })
   }
   function handlecheckDifficulty(e){
    e.preventDefault();
    if(e.target.checked){
      console.log(e.target.value);
      setinput({
        ...input,
        difficulty: e.target.value
      })
    }
  }
  function handlecheckSeason(e){
    e.preventDefault();
    if(e.target.checked){
      console.log(e.target.value);
      setinput({
        ...input,
        season: e.target.value
      })
    }
  }
   function handleSelectcountry(e){
    e.preventDefault();
    console.log(e.target.value);
    setinput({
      ...setinput,
      countries: [...input.countries,e.target.value]
    })
   }

   function handlesubmit(e) {
     e.preventDefault();
     console.log(input);
    dispatch(createActivity(input))
    alert("Actividad creada exitosamente")
    setinput({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      imagen: '',
      countries: []
    })
   }

  return (
    <div>
        <Navbar />
      <div className={Form__container}>
            <div><h1>Create Activities</h1></div>
          <form className={Formcreate}  onSubmit={e => handlesubmit(e)}>
              <label>Name:</label>
              <input 
              type="text" 
              name="name" 
              input={input.name} 
              onChange={(e) => handleChange(e)}/>

              <label>Difficulty:</label>
              <div>
                  <label> 
                   <input 
                   type='checkbox' 
                   name='1' 
                   value="1"
                   onChange={(e) => handlecheckDifficulty(e)}
                   /> 1 
                  </label> 
                  <label> 
                    <input 
                    type='checkbox' 
                    name='2' 
                    value="2"
                    onChange={(e) => handlecheckDifficulty(e)}
                    /> 2 
                  </label> 
                  <label> 
                    <input 
                    type='checkbox' 
                    name='3' 
                    value="3"
                    onChange={(e) => handlecheckDifficulty(e)}
                    /> 3
                  </label> 
                  <label> 
                    <input 
                    type='checkbox' 
                    name='4' 
                    value="4"
                    onChange={(e) => handlecheckDifficulty(e)}
                    /> 4 
                  </label> 
                  <label> 
                    <input 
                    type='checkbox'
                    name='5' 
                    value="5"
                    onChange={(e) => handlecheckDifficulty(e)}
                    /> 5
                  </label> 
          
              </div>

              <label>Duration:</label>
              <input 
              type="number" 
              name='duration' 
              input={input.duration} 
              onChange={(e) => handleChange(e)}/> 

              <label>Season:</label>
              <div>

                <label> 
                  <input 
                  type='checkbox'
                  name='Summer'
                  value="Summer"
                   onChange={(e) => handlecheckSeason(e)}
                  />Summer</label>
                <label> 
                  <input 
                  type='checkbox'
                  name='Winter'
                  value="Winter"
                   onChange={(e) => handlecheckSeason(e)}
                  />Winter</label>
                <label> 
                  <input 
                  type='checkbox'
                  name='Spring'
                  value="Spring"
                   onChange={(e) => handlecheckSeason(e)}
                  />Spring</label>
               <label> 
                  <input
                  type='checkbox'
                  name='Autum'
                  value="Autum"
                   onChange={(e) => handlecheckSeason(e)}
                  />Autumn</label>

              </div>

              <label>image:</label>
              <input 
              type="text" 
              name='imagen' 
              input={input.imagen} 
              onChange={(e) => handleChange(e)}/>

              <label>countries:</label>
              <select onChange={(e) => handleSelectcountry(e)}>
                {
                  state.map(e=> 
                   ( <option value={e.name}>{e.name}</option>)
                  )
                }
              </select>
                <ul><li>{input.countries.map(c => c + " , ")}</li></ul>
              <button type='submit'>Create Activity</button> 
          </form>
      </div>
    </div>
  )
}

export default Form