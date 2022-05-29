import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import {  getAllCountries } from '../../redux/actions'
import SingleCard from '../SingleCard/SingleCard';
import Loading from '../Loading/Loading';
import './Home.css'
import Navbar from '../Navbar/Navbar';

function Home() {
    const [currentpage, setcurrentpage] = useState(1);
    const [countriesperpage] = useState(10);
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState('')
    const [paises, setpaises] = useState('')
    const countries = useSelector( state => state.countries);
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllCountries())
        setpaises(countries)
    },[dispatch])
    
    //-----------------carga de la pagina------------------// 
    useEffect(()=>{
        setTimeout(() => {
            setloading(true)
        },1400)
    })

    //-------------------Busqueda--------------------//
    
    const searchInput = (e) =>{
        paginate(1);
        setsearch(e);
    }
    //-----------------Paginacion------------------// 
    
    const indexLastCountries = currentpage * countriesperpage;
    const indexFirtsCountries = indexLastCountries - countriesperpage;
    const currentCountries = countries.slice(indexFirtsCountries,indexLastCountries);
    
    const paginate = (n) => setcurrentpage(n)
    
    //-----------------Paginacion------------------// 


    return (
    <div>
        <Navbar />
            <input className='Busqueda' placeholder='buscar por Pais, continente, subregion o capital' onChange={e => searchInput(e.target.value)}></input>
            <br/>
        {
            loading === false ? 
            <Loading /> : 
        <div className='CardsContainer'>
        {/* Estamos usando countries, al cambiar a Currentcountries se activa el paginado, hay que fixear eso */}
            {currentCountries.filter((val) =>{
                if (search === '') {
                    return val
                }
                else if (val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
                else if (val.capital.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
                else if (val.continente.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((e,i) => 
            <SingleCard key={i} 
            countries={currentCountries} 
            subregion={e.subregion} 
            name={e.name} id={e.id} 
            imagen={e.imagen} 
            capital={e.capital}/>)}
        </div>}
            <Pagination countriesperpage={countriesperpage} totalCountries={countries.length} paginate={paginate} />

    </div>
  )
}

export default Home;