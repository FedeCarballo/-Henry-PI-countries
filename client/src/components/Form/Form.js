import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createActivity, getAllCountries } from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import {Form__container, Formcreate, Deletebutton, checkbox, submit_button, country_list, error_text} from './Form.module.css'


function Form() {

    const [input, setinput] = useState({name: " ", difficulty: " ",duration: " ",season: " ",image: " ", country: [] })
    const [errors, seterrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state) => state.countries)
    useEffect(()=>{
      dispatch(getAllCountries())
    },[]);
    
// Validacion de datos ingresados
  
const validate = (values) => {
  const errors = {};
  const nameRegular = /^[a-zA-ZÀ-ÿ\s]{4,40}$/
  if  (!values.name) {
      errors.name = "Name is required";
     } else if(!nameRegular.test(values.name)){
      errors.name = "Invalid Name format";
     }
  if  (!values.difficulty){
      errors.difficulty = "Difficulty is required"
      }
  if  (!values.duration){
      errors.duration = "Duration is required"
      }
  if  (!values.season){
      errors.season = "Season is required"
      }
  if  (!values.country){
      errors.country = "Almost one country is required"
      }
  return errors
    }

useEffect(() =>{
  console.log(errors)
 if(Object.keys(errors).length == 0 && isSubmit){
   console.log(input)
 }
},[errors])

//Input Handlers: 
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

//Eliminar country de la lista de countries seleccionados
   function handleDeleteCountry(d){
    setinput({
      ...input,
      country: input.country.filter(k => k !== d)
    })
  }

//Handle submit con primera Validacion:
   function handlesubmit(s) {
    s.preventDefault();
    seterrors(validate(setinput))
    setisSubmit(true);
    {
      Object.keys(errors).length == 0 && isSubmit ? ValidateSubmit() :
      s.preventDefault()
    }
   }

   //Validacion final, si todo se encuentra correctamente se hara la validacion por keys y luego se hara el dispatch
   function ValidateSubmit(e){
    dispatch(createActivity(input))
    alert("actividad creada exitosamente")
    navigate('/countries/activities')
    setinput({name: '',difficulty: '',duration: '',season: '',image: '',country: [] })
  }

  return (
    <div>
        <Navbar />
      <div className={Form__container}>
            <div><h1>Create Activities</h1></div>
          <form className={Formcreate} onSubmit={e => handlesubmit(e)}>
              <label>Name:</label>
              <input type="text" name="name" input={input.name} onChange={(e) => handleChange(e)}/>
              {
                <p className={error_text}>{errors.name}</p>
              }
              <label>Difficulty:</label>
                <div className={checkbox}>
                  <label> 
                   <input type='checkbox' name='1' value="1" onChange={(e) => handlecheckDifficulty(e)}/> 1 
                  </label> 
                  <label> 
                    <input type='checkbox' name='2' value="2" onChange={(e) => handlecheckDifficulty(e)}/> 2 
                  </label> 
                  <label> 
                    <input type='checkbox' name='3' value="3" onChange={(e) => handlecheckDifficulty(e)}/> 3
                  </label> 
                  <label> 
                    <input type='checkbox' name='4' value="4" onChange={(e) => handlecheckDifficulty(e)}/> 4 
                  </label> 
                  <label> 
                    <input type='checkbox' name='5' value="5" onChange={(e) => handlecheckDifficulty(e)}/> 5
                  </label> 
                  </div>
                  {
                    <p className={error_text}>{errors.difficulty}</p>
                  }
              <label>Duration:</label>
              <input type="number"  name='duration'  input={input.duration}  onChange={(e) => handleChange(e)}/> 
              {
                <p className={error_text}>{errors.duration}</p>
              }
              <label>Season:</label>
              <div className={checkbox}> 
              <label> 
                  <input type='checkbox' name='Summer' value="Summer" onChange={(e) => handlecheckSeason(e)}/>Summer
              </label>
              <label> 
                  <input type='checkbox' name='Winter' value="Winter" onChange={(e) => handlecheckSeason(e)}/>Winter
              </label>
              <label> 
                  <input type='checkbox' name='Spring' value="Spring" onChange={(e) => handlecheckSeason(e)}/>Spring
              </label>
              <label> 
                  <input type='checkbox' name='Autum' value="Autum" onChange={(e) => handlecheckSeason(e)}/>Autumn
              </label>
              </div>
              {
                <p className={error_text}>{errors.season}</p>
              }
              <label>image:</label>
              <input type="text" name='image' input={input.image} onChange={(e) => handleChange(e)}/>
              {
                <p className={error_text}>{errors.image}</p>
              }
              <label>countries:</label>
              <select onChange={(e) => handleSelectcountry(e)}>
                {
                  state.map((e,i)=> 
                   ( <option key={i} value={e.name}>{e.name}</option>)
                  )
                }
              </select>
              {
                <p className={error_text}>{errors.country}</p>
              }

                 { input.country.map(d => <ul className={country_list}>
                    <div>
                      <li>{d}</li> 
                      <button type='button' className={Deletebutton} onClick={() => handleDeleteCountry(d)}>X</button>
                    </div>
                    </ul>)}
                <button type='submit' className={submit_button}>Create Activity</button> 
          </form>
      </div>
    </div>
  )
}

export default Form