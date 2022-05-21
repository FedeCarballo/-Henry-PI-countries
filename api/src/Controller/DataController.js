const axios = require('axios')
const {Country, Activities } = require('../db')


async function getAllCountries(req,res,next){
    try {
        let countries = ( await axios('https://restcountries.com/v3/all')).data
        countries = countries.map(c =>({
            name: c.name.common,
            imagen: c.flags[1],
            continente: c.continents,
            subregion: c.subregion,
            capital: c.capital,
            area: c.area,
            poblacion: c.population,
            googleMaps: c.maps.googleMaps
        }))
        res.send(countries)
    }
    catch (error) {  
        next(error) 
    }
}

async function getAllActivities (req,res,next){
    try {
        let activities = await Activities.findAll();
        res.send(activities)
    } catch (error) {
        next(error)
    }
}
module.exports ={
    getAllCountries,
    getAllActivities
}