import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
        <Link to="/countries">
            <button>
                Mostrar Paises
            </button>
        </Link>
    </div>
  )
}

export default Landing