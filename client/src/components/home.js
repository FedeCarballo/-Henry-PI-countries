import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { getAllCountries } from '../redux/actions'
import SingleCard from './SingleCard';
import Loading from './Loading';

function Home() {
    const [currentpage, setcurrentpage] = useState(1);
    const [countriesperpage] = useState(10);
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);

    useEffect(()=>{
       dispatch(getAllCountries())
    },[])

    
    //-----------------carga de la pagina------------------// 
    useEffect(()=>{
        setTimeout(() => {
            setloading(true)
        },2000)
    })

    //-----------------Paginacion------------------// 
    const indexLastCountries = currentpage * countriesperpage;
    const indexFirtsCountries = indexLastCountries - countriesperpage;
    const currentCountries = countries.slice(indexFirtsCountries,indexLastCountries);

    const paginate = (n) => setcurrentpage(n)
     //-----------------Paginacion------------------// 

    return (
    <div>
        <Link to="/">
        <button>Hagame click, voy a filtrar por nombre</button>
        </Link>
        {
            loading === false ? <Loading /> : 
        <div>
            {currentCountries.map((e,i) => <SingleCard countries={currentCountries} subregion={e.googleMaps} name={e.name} id={i} imagen={e.imagen} capital={e.capital}/>)}
            <Pagination countriesperpage={countriesperpage} totalCountries={countries.length} paginate={paginate} />
        </div>}

    </div>
  )
}

export default Home;