import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../redux/actions';
import {Activities__empty, button85} from './Activities.module.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
function Activities() {

    const dispatch = useDispatch()

    const state = useSelector(state => state.activities);

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])
  return (
   (
     <div> 
     <Navbar />
     { state.length>0 ?
         state.map((e,i) => <div key={i}><h1>{e.name}</h1>{e.duracion} <h2>{e.countries[0]?.name}</h2> </div>)
        : 
        <div className={Activities__empty}>
        <h3>
        There's not activities yet..
        </h3>
        <p>do you want to create one?</p>
        <Link to="/countries/activities/create">
          <button className={button85}>
           Create New activity
          </button>
        </Link>
      </div> }
    </div> )
  )
}

export default Activities