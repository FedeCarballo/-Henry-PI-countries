import React from 'react'
import { Link } from 'react-router-dom'
import Links from '../Links/Links'
import {button85, PrincipalContainer, seven} from './Landing.module.css'

function Landing() {
  return (
    <div className={PrincipalContainer}>
        <div className={seven}>
          <h1>Wellcome to the Country app</h1>
          <h4>Find or Create your favorite activities around the world</h4>
        </div>
        <Link to="/countries">
          <button className={button85}>Let's Go</button>
        </Link>
          <Links />
    </div>
  )
}

export default Landing