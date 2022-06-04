import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterCountriesByActivity, filterCountriesByContinent, Getinput, OrderByName, OrderByPopulation, resetPage } from '../../redux/actions'
import {Search,Search__filters, Search__search} from './Searchbar.module.css'
import icon from '../../assets/search.svg'

function Searchbar() {

    const [name, setname] = useState('')
    const ActivitiesStatus = useSelector(state => state.activities)
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        setname(e.target.value)
    }
    function handlesubmit(e){
        e.preventDefault()
        dispatch(Getinput(name))
        setname('')
    }
    //----------FILTROS----------//
    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
    }
    function handleFilterAlphabetical(e){
        dispatch(OrderByName(e.target.value))
    }
    function handleFiltePopulation(e){
        dispatch(OrderByPopulation(e.target.value))
    }
    function handleFilterActivity(e){
        dispatch(filterCountriesByActivity(e.target.value))
    }
    //----------FILTROS----------//
  return (
        <div className={Search}>
            <div className={Search__filters}>
                <label>Order countries By:</label>
                <select onChange={e => handleFilterAlphabetical(e)}>
                    <option value=" ">Alphabetical</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onChange={e => handleFiltePopulation(e)}>
                    <option value=" ">Population</option>
                    <option value="low">Population: low to high</option>
                    <option value="high">Population: high to low</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value= "">Continent</option>
                    <option value="All">All continents</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                </select>
                {
                    ActivitiesStatus ?
                    <select onChange={e => handleFilterActivity(e)}>
                   { ActivitiesStatus.map(e => 
                        
                        <option value={e.name}>
                            {e.name}
                        </option>
                        )}
                    </select>
                    : null
                }
            </div>

            <div className={Search__search}>
            <input placeholder='Find country...' onChange={e => handleChange(e)}></input>
            <button type='submit' onClick={(e) => handlesubmit(e)}><img src={icon} alt='search'/></button>
            </div>
        </div>
    )
}

export default Searchbar