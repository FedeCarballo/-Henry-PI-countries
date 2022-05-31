import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterCountriesByContinent, Getinput } from '../../redux/actions'
import {Search,Search__filters, Search__search} from './Searchbar.module.css'
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
        dispatch(Getinput(name))
        setname('')
    }

    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
    }
  return (
        <div className={Search}>
            <div className={Search__filters}>
                <label>Order countries By:</label>
                <select name='seleccionar'>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
                <select>
                    <option>Population: low to high</option>
                    <option>Population: high to low</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value="All">All continents</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Europe">Europe</option>
                    <option value='"North America"'>North America</option>
                    <option value='"South America"'>South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="undefined">undefined</option>
                </select>
            </div>
            <div className={Search__search}>
            <input placeholder='Find country...' onChange={e => handleChange(e)}></input>
            <button type='submit' onClick={(e) => handlesubmit(e)}><img src={icon} alt='search'/></button>
            </div>
        </div>
    )
}

export default Searchbar