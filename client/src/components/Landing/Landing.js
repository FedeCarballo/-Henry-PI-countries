import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../Links/Links'
import {button85, PrincipalContainer, seven} from './Landing.module.css'

function Landing() {
  return (
    <div className={PrincipalContainer}>
        <div className={seven}>
          <h1>Bienvenido a la Country App</h1>
        </div>
        <Link to="/countries">
          <button className={button85}>Mostrar paises</button>
        </Link>
          <Links />
    </div>
  )
}

export default Landing