import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteActivity, getAllActivities } from '../../redux/actions';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {Activities_countries_container, Activities_container, Activities_delete, Activities_countries, Activities_Div,Activities__empty, button85, activity_image, div1,div2} from './Activities.module.css'


function Activities() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.activities);

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])
    
  
    function handleDelete(e){
     confirm("Desea eliminar la actividad?")
      if (confirm == false){
        e.preventDefault;
      }
      {
        dispatch(deleteActivity(e))
        navigate('/countries')
      }
    }

  return (
   (
     <div> 
     <Navbar />
     <div className={Activities_container}>
     { state.length>0 ?  //Si el length del state es mayor a 0 hago el mapeo
        state.map((e,i) => 
        <div key={e.id} id={e.id}  className={Activities_Div}>
          <div className={div1}>
            {/* Informacion de la actividad traida */}
            <button onClick={handleDelete(e.id)} className={Activities_delete}>X</button>
              <h1>Name: {e.name}</h1>
              <hr/>
              <h2>Duration: {e.duration} Hs</h2>
              <h2>Season: {e.season}</h2>
              <h2>difficulty: {e.difficulty}</h2>
              <h1>Countries: </h1>
            <div className={Activities_countries_container}>

              {e.countries.map((c,i) => //Hago un mapeo de los Countries pertenecientes a la actividad
                <div key={e.id} className={Activities_countries}>
                <h2 key={c.name}>{c.name}</h2>
                <img src={c.imagen} />
                <Link to={`/countries/${c.id}`} content={c.name}>
                  <button className={button85}>See more Details</button>
                </Link>
              </div>)}
            </div>
          </div>  
          <div className={div2}>
            < img src={e.image} alt={e.name} className={activity_image}/>
          </div>
            
        </div>)
          : 
          <div className={Activities__empty}> 
            <h3>There's not activities yet..</h3>
            <p>do you want to create one?</p>
            <Link to="/countries/activities/create">
              <button className={button85}>
                Create New activity
              </button>
            </Link>
      </div> 
      }
    </div>
  </div> )
  )
}

export default Activities