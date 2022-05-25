import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { getAllCountries } from '../redux/actions'
import SingleCard from './SingleCard';

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
        <button onClick={ActivitieInutil}> 
            hagame click que soy inutil y no hago nada
        </button>
        <Link to="/">
        <button>Hagame click, juro que no hago nada</button>
        </Link>
        {countries.map((e,i) => <SingleCard name={e.name} id={i} imagen={e.imagen} capital={e.capital}/>)}
    </div>
  )
}

export default Home;