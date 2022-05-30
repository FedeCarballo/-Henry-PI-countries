import React from 'react'
import { Link } from 'react-router-dom'
import gh from '../../assets/GH and Ldn/github.png'
import ln from '../../assets/GH and Ldn/linkedin.png'
import {Navbar_container} from './Navbar.module.css'

function Navbar() {
  return (
    <div className={Navbar_container}>
        <div>
        <a href="https://www.linkedin.com/in/federico-concepcion-carballo-benitez/" target="_blank"><img src={ln} alt='Linkedin' /></a>
        <a href="https://github.com/FedeCarballo" target="_blank"><img src={gh} alt='Github' /></a>
        </div>
        <ul>

           <Link to='/'>
                <a>Home</a> 
           </Link>
           <Link to='/countries'>
                <a>Countries</a>       
           </Link>
            <Link to='/countries/activities'>
                <a>Activities</a>
            </Link>
            <Link to='/countries/activities/create'>
                <a>New activity</a>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar