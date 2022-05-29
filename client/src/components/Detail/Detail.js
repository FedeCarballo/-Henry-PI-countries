import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getSingleCountry } from '../../redux/actions';
import Navbar from '../Navbar/Navbar';
import {Detail__div, Detail__Container, Activities_Details, Country_Details,Detail_subcontainer, Detail_div_text} from './Detail.module.css'
function Detail () {

    const params = useParams()

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);
    
    useEffect(()=>{
       dispatch(getSingleCountry(params.id))
    },[dispatch])

  return (
    <div className={Detail__Container}>
      <div className='boton_back'> 
        <Navbar />
      </div>
    <div className={Detail_subcontainer}> 
        <div className={Country_Details}>
              <p>Continente: {countries[0]?.continente}</p>
              <p>Subregion: {countries[0]?.subregion}</p>
              <p>Area: {countries[0]?.area} km²</p>            
              <p>Poblacion: {countries[0]?.poblacion}</p>
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
        {

        countries[0]?.activities.length>0 ?
        <div className={Activities_Details}>
        <h2>
          Actividades a realizar en este pais:
        </h2>
            <p>
              {countries[0]?.activities[0]?.name}
            </p>
            <p>
             nombre: {countries[0]?.activities[1]?.name}
            </p>
            <p>
             dificultad: {countries[0]?.activities[0]?.dificultad}
            </p>
            <p>
             duracion: {countries[0]?.activities[0]?.duracion}
            </p>
            <p>
             temporada: {countries[0]?.activities[0]?.temporada}
            </p>
            <img src={countries[0]?.activities[0]?.imagen} />
      </div>
        : 
        <div className={Activities_Details}>
          <h3>
            No hay activivades designadas.
          </h3>
          <p>deseas crear una actividad para este pais?</p>
          <Link to="/countries/activities/create">
            <button>
              Crear actividad
            </button>
          </Link>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Detail