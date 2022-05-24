import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllCountries } from '../redux/actions'

function Home() {
    const dispatch = useDispatch()
    
    const countries = useSelector(state => state.countries);

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    function ActivitieInutil(){
        alert("dije que no hacia nada")
    }
    return (
    <div>
    
        <button onClick={ActivitieInutil}>Hagame click, juro que no hago nada</button>
      
        {
            countries&&countries.map(e => {
                return (
                <div>
                   <h1>{e.name}</h1> 
                    <h2>{e.capital}</h2>
                    <img src={e.imagen} alt={e.name}></img>
                    <button>Mas informacion</button>
                </div>)
            })
        }
    </div>
  )
}

export default Home;