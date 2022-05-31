import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCountries, Getinput } from '../../redux/actions'
import {Search} from './Searchbar.module.css'
import icon from '../../assets/search.svg'
function Searchbar() {
    const dispatch = useDispatch()
    const [name, setname] = useState('')

    function handleChange(e){
        e.preventDefault()
        setname(e.target.value)
        console.log(name);
    }

    function handlesubmit(e){
        e.preventDefault()
        if(!name.length){
            dispatch(getAllCountries())
        }
        dispatch(Getinput(name))
    }

  return (
        <div className={Search}>
            <input placeholder='Find country..' onChange={e => handleChange(e)}></input>
            <button type='submit' onClick={(e) => handlesubmit(e)}><img src={icon} alt='search'/></button>
        </div>
    )
}

export default Searchbar