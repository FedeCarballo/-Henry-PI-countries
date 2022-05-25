import React from 'react'
import { Link } from 'react-router-dom'

function SingleCard({name, capital,imagen,id}) {
  return (
    <div>
    <h1>{name}</h1> 
     <h2>{capital}</h2>
     <img src={imagen} alt={name}></img>
     <Link to={`/countries/detail/${id}`}>
         <button>Hagame click, juro que no hago nada</button>
     </Link>
 </div>
  )
}

export default SingleCard