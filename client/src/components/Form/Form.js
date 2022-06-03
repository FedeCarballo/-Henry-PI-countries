import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createActivity, getAllCountries } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formcreate, Deletebutton} from './Form.module.css'




function Form() {
    const [input, setinput] = useState({name: " ", difficulty: " ",duration: " ",season: " ",imagen: " ", country: [] })
    const [errors, seterrors] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state) => state.countries)
    useEffect(()=>{
      dispatch(getAllCountries())
    },[]);
    
    
    function validate(input){
         let errors = {};
         if(input.name.length == 0) {
           errors.name = "Name is required";
         }
         if (!input.difficulty){
           errors.difficulty = "Difficulty is required"
         }
         if (input.duration <= 0){
           errors.duration = "Duration is required"
         }
         if (!input.season == null){
           errors.season = "Season is required"
         }
         if (input.country == 0){
           errors.country = "Almost one country is required"
         }
         return errors
       }
   

  function handleChange(e){
    e.preventDefault();
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })
      seterrors(validate({
        ...input,
        [e.target.name] : e.target.value
      }))
   }
  function handlecheckDifficulty(f){
    f.preventDefault();

    if(f.target.checked){
      setinput({
        ...input,
        difficulty: f.target.value
      })
    }
    seterrors(validate({
      ...input,
      difficulty : f.target.value
    }))
  }
  function handlecheckSeason(g){
    g.preventDefault();
    if(g.target.checked){
      setinput({
        ...input,
        season: g.target.value
      })
    }
    seterrors(validate({
      ...input,
      season : g.target.value
    }))
  }
  function handleSelectcountry(c){
    c.preventDefault();
    console.log(c.target.value);
    setinput({
      ...input,
      country: [...input.country,c.target.value]
    })
    seterrors(validate({
      ...input,
      country : [...input.country,c.target.value]
    }))
   }

   function handleDeleteCountry(d){
    setinput({
      ...input,
      country: input.country.filter(k => k !== d)
    })
  }

   function handlesubmit(s) {
     s.preventDefault();
    dispatch(createActivity(input))
    setinput({name: '',difficulty: '',duration: '',season: '',imagen: '',country: [] })
    alert("Actividad creada exitosamente")
    navigate('/countries/activities')
   }

console.log(errors);
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
              {
                errors.name && (<p>{errors.name}</p>)
              }
              <label>Difficulty:</label>

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
                  {
                errors.difficulty && (<p>{errors.difficulty}</p>)
              }
              <label>Duration:</label>
              <input 
              type="number" 
              name='duration' 
              input={input.duration} 
              onChange={(e) => handleChange(e)}/> 
              {
                errors.season && (<p>{errors.season}</p>)
              }
              <label>Season:</label>
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

              <label>image:</label>
              <input 
              type="text" 
              name='imagen' 
              input={input.imagen} 
              onChange={(e) => handleChange(e)}/>

              <label>countries:</label>
              <select onChange={(e) => handleSelectcountry(e)}>
                {
                  state.map((e,i)=> 
                   ( <option key={i} value={e.name}>{e.name}</option>)
                  )
                }
              </select>
              {
                errors.country && (<p>{errors.country}</p>)
              }

                 { input.country.map(d => <ul>
                    <li>{d}</li> 
                    <button type='button' className={Deletebutton} onClick={() => handleDeleteCountry(d)}>X</button>
                    </ul>)}


             {
               errors ? <button type='submit'>Create Activity</button> : <p>Debes completar todos los campos requeridos</p>
             }  

          </form>
      </div>
    </div>
  )
}

export default Form