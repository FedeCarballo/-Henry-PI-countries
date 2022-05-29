import React, { useState } from 'react'
import './Form.css'
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
            <button class="button-49" role="button">Button 49</button>

        </form>
    </div>
  )


}

export default Form