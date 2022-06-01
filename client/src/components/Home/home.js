import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import {  getAllCountries } from '../../redux/actions'
import SingleCard from '../SingleCard/SingleCard';
import Loading from '../Loading/Loading';
import {CardsContainer} from './Home.module.css'
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

function Home() {
    const [currentpage, setcurrentpage] = useState(1);
    const [countriesperpage] = useState(10);
    const [loading, setloading] = useState(false);
    
    const countries = useSelector( state => state.countries);
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllCountries())
    },[dispatch])
    
    //-----------------carga de la pagina------------------// 
    useEffect(()=>{
        setTimeout(() => {
            setloading(true)
        },1100)
    })
    //-----------------carga de la pagina------------------// 

    //-----------------Paginacion------------------// 
    
    const indexLastCountries = currentpage * countriesperpage;
    const indexFirtsCountries = indexLastCountries - countriesperpage;
    const currentCountries = countries.slice(indexFirtsCountries,indexLastCountries);
    
    const paginate = (n) => setcurrentpage(n)
    
    //-----------------Paginacion------------------// 


    return (
    <div>
        <Navbar />
        <Searchbar />
        {
            loading === false ? 
            <Loading /> : 
            <div>

        <div className={CardsContainer}>
            {currentCountries.map((e,i) => 
            <SingleCard key={i} 
            continent={e.continente}
            population= {e.population}
            countries={currentCountries} 
            subregion={e.subregion} 
            name={e.name} id={e.id} 
            imagen={e.imagen} 
            capital={e.capital}/>)}
        </div>
            <Pagination countriesperpage={countriesperpage} totalCountries={countries.length} paginate={paginate} />
        </div>
        }

    </div>
  )
}

export default Home;