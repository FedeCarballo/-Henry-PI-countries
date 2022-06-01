import React from 'react'
import { Link } from 'react-router-dom'
import {card, button85} from './SingleCard.module.css'
function SingleCard({name, capital,imagen,id,population, continent}) {

  return (
    <div id={id} className={card}>
      <h1>{name}</h1> 
      <h2>{capital}</h2>
      <h2>{continent}</h2>
      <h3>{population}</h3>
      <img src={imagen} alt={name}/>
      <Link to={`/countries/${id}`} content={name}>
         <button className={button85}>Details</button>
     </Link>
    </div>
  )
}

export default SingleCard