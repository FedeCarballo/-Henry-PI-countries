import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getAllActivities, getSingleCountry } from '../../redux/actions';
import Navbar from '../Navbar/Navbar';
import {Detail__div, Detail__Container, Activities_Details, Country_Details, Detail_subcontainer, Detail_div_text, button85, Activities__null} from './Detail.module.css'
function Detail () {

    const params = useParams()

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);
    const activities = useSelector(state => state.activities);
    
    useEffect(()=>{
       dispatch(getSingleCountry(params.id))
       dispatch(getAllActivities())
    },[dispatch])

  return (
    <div className={Detail__Container}>
      <div className='boton_back'> 
        <Navbar />
      </div>
    <div className={Detail_subcontainer}> 
        <div className={Country_Details}>
              <p>Continent: {countries[0]?.continent}</p>
              <p>Subregion: {countries[0]?.subregion}</p>
              <p>Area: {countries[0]?.area} km²</p>            
              <p>Population: {countries[0]?.population}</p>
              <p>ID: {countries[0]?.key}</p>
        </div>

        <div className={Detail__div}>
          <div className={Detail_div_text}>
              <h1>{countries[0]?.name}</h1>
              <h3>{countries[0]?.capital}</h3>
          </div>
              <img src={countries[0]?.imagen} />
              <h2>
                {countries[0]?.subregion}
              </h2>
        </div>
       <div className={Activities_Details}> 
          <h2>
            Activities:
          </h2>
       {
        countries[0]?.activities.length>0 ?
        activities.map(e => 
        <div>
           <p>
             {e.name}
            </p>
            <p>
            difficulty: {e.dificultad}
            </p>
             <p>
             duration: {e.duracion}
            </p>
             <p>
             season: {e.temporada}
            </p>
            <img src={e.imagen} />
        </div>)
        : 
        <div className={Activities__null}>
          <h3>
          there is no designated activity for this country
          </h3>
          <p>do you want to create one?</p>
          <Link to="/countries/activities/create">
            <button className={button85}>
             Create New activity
            </button>
          </Link>
        </div>
        }</div>
        
      </div>
    </div>
  )
}

export default Detail