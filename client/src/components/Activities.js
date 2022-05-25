import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../redux/actions';

function Activities() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.activities);

    useEffect(()=>{
        dispatch(getAllActivities())
    },[])
  return (
    <div>
        {
            state ? state.map(e => <div><h1>{e.name}</h1>{e.duracion}</div>) : null
        }
    </div>
  )
}

export default Activities