import React, { useState } from 'react'

function Form() {

    const DefaultStatus = {nombre:" ", dificultad:" ", duracion:" ", temporada:"", countries:""}

    const [formulario,setformulario] = useState(DefaultStatus)

  return (
    <div>
           <div><h1>Crear Actividad</h1></div>
        <form>
            <label>Nombre:</label><input/>
            <label>Dificultad:</label><input/>
            <label>Duracion:</label><input/>
            <label>temporada:</label><input/>

        </form>
    </div>
  )


}

export default Form