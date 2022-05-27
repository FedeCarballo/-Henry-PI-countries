import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleCountry } from '../../redux/actions';
import './Detail.css'
function Detail () {

    const params = useParams()

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);
    
    useEffect(()=>{
       dispatch(getSingleCountry(params.id))
    },[dispatch])

  return (
    <div className='Detail__div'>
          <h1>
           {countries[0]?.name}
          </h1>
          <h2>
            {countries[0]?.capital}
          </h2>
          <img src={countries[0]?.imagen} />
          <h2>
            {countries[0]?.continente}
          </h2>
          <h2>
            {countries[0]?.subregion}
          </h2>
          <h3>
            {countries[0]?.activities[0]?.name}
          </h3>
          <h3>
            {countries[0]?.activities[1]?.name}
          </h3>
          <img src={countries[0]?.activities[0]?.imagen} />
    </div>
  )
}

export default Detail