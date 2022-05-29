import React from 'react'
import { Link } from 'react-router-dom'
import {Cards, button85} from './SingleCard.module.css'
function SingleCard({name, capital,imagen,id,subregion}) {

  return (
    <div id={id} className={Cards}>
      <h1>{name}</h1> 
      <h2>{subregion}</h2>
      <h2>{capital}</h2>
      <img src={imagen} alt={name}/>
      <Link to={`/countries/${id}`} content={name}>
         <button className={button85}>ver mas detalles</button>
     </Link>
    </div>
  )
}

export default SingleCard