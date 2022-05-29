import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../redux/actions';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';

function Activities() {

    const dispatch = useDispatch()

    const state = useSelector(state => state.activities);

    useEffect(()=>{
        dispatch(getAllActivities())
    },[])
  return (
   (
     <div> 
     <Navbar />
     { state ?
         state.map((e,i) => <div key={i}><h1>{e.name}</h1>{e.duracion} <h2>{e.countries[0]?.name}</h2> </div>)
        : 
    <Loading /> }
    </div> )
  )
}

export default Activities