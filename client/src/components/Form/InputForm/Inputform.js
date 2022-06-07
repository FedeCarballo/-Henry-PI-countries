import React from 'react'

const Inputform = ({state, setstate, label, placeholder,type,error,regex,name }) => {
    const onChange= (e) =>{
        console.log(e.target.value);
        setstate({...state, field: e.target.value})
    }
 return (
      <div>
          <label htmlFor={name}>{label}</label>
          <input
            type={type} 
            placeholder={placeholder} 
            id={name}
            value={state.f}
            onChange={onChange}
            />
            
      </div>
    )
}

export default Inputform