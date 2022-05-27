import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../redux/actions';
import Loading from '../Loading/Loading';

function Activities() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.activities);

    useEffect(()=>{
        dispatch(getAllActivities())
    },[])
  return (
   (<div> 
     { state ?
         state.map(e => <div><h1>{e.name}</h1>{e.duracion} <h2>{e.countries[0]?.name}</h2> </div>)
        : 
    <Loading /> }
    </div> )
  )
}

export default Activities