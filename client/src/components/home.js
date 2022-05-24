import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../redux/actions'

function Home() {
    const dispatch = useDispatch()
    
    const countries = useSelector(state => state.countries);

    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    return (
    <div>
        {
            countries&&countries.map(e => {
                return (
                <div>
                   <h1>{e.name}</h1> 
                    <h2>{e.capital}</h2>
                </div>)
            })
        }
    </div>
  )
}

export default Home;