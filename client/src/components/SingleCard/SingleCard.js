import React from 'react'
import { Link } from 'react-router-dom'
import './SingleCard.css'
function SingleCard({name, capital,imagen,id,subregion}) {

  return (
    <div id={id} className='Cards'>
      <h1>{name}</h1> 
      <h2>{subregion}</h2>
      <h2>{capital}</h2>
      <img src={imagen} alt={name}></img>
      <Link to={`/countries/detail/${id}`}>
         <button>ver mas detalles</button>
     </Link>
    </div>
  )
}

export default SingleCard