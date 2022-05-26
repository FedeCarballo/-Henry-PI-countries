import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { BuscarPais, getAllCountries, OrdenAlfabetico } from '../../redux/actions'
import SingleCard from '../SingleCard/SingleCard';
import Loading from '../Loading/Loading';
import './Home.css'

function Home() {
    const [currentpage, setcurrentpage] = useState(1);
    const [countriesperpage] = useState(10);
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState('')

    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);

    useEffect(()=>{
       dispatch(getAllCountries())
    },[])
    
    //-----------------carga de la pagina------------------// 
    useEffect(()=>{
        setTimeout(() => {
            setloading(true)
        },1400)
    })

    //-------------------filters--------------------//
 
    const searchInput = (e) =>{
        paginate(1);
    }
    //-----------------Paginacion------------------// 
    const indexLastCountries = currentpage * countriesperpage;
    const indexFirtsCountries = indexLastCountries - countriesperpage;
    const currentCountries = countries.slice(indexFirtsCountries,indexLastCountries);

    const paginate = (n) => setcurrentpage(n)
     //-----------------Paginacion------------------// 

    return (
    <div>
        <div>
            <input placeholder='buscar pais' onChange={e => searchInput(e.target.value)}></input>
        </div>
        {
            loading === false ? <Loading /> : 
        <div className='CardsContainer'>
            {currentCountries.map((e,i) => <SingleCard key={i} countries={currentCountries} subregion={e.googleMaps} name={e.name} id={e.id} imagen={e.imagen} capital={e.capital}/>)}
        </div>}
            <Pagination countriesperpage={countriesperpage} totalCountries={countries.length} paginate={paginate} />

    </div>
  )
}

export default Home;