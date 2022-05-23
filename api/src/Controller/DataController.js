const axios = require('axios')
const { Country } = require('../db')

// traigo los datos de la api y los mapeo:
async function getAllCountries(req,res,next){
    try {
        let countries = ( await axios('https://restcountries.com/v3/all')).data.map(c =>({
            key: c.cca3,
            name: c.name.common,
            imagen: c.flags[0],
            continente: c.continents?.toString(),
            subregion: c.subregion,
            capital: c.capital?.toString(),
            area: c.area,
            poblacion: c.population,
            googleMaps: c.maps.googleMaps,
        }));
       countries.map (e => (
           Country.findOrCreate({
            where: {name: e.name},
            defaults:{
                key: e.key,
                imagen: e.imagen,
                continente: e.continente,
                subregion: e.subregion,
                capital: e.capital,
                area: e.area,
                poblacion: e.poblacion,
                googleMaps: e.googleMaps
            }
        })))
        res.send(countries);
    }
    catch (error) {  
       console.log(error);
    }
}

module.exports ={
    getAllCountries,
}