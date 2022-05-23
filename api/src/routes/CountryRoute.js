const { Router} = require('express');
const express = require('express')
const { getAllCountries, GetCountriesdb } = require('../Controller/DataController');

const router = Router();

router.use(express.json())

// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
router.get('/',async (req,res) =>{
    let countries = await getAllCountries();
    res.send(countries)
});


// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes

router.get('/:id',async (req,res) =>{
    try {
    let countries = await GetCountriesdb;
    const id = req.params.id
    const SingleCountry = countries.filter(c => id == c.id)
    res.json(SingleCountry)    
    } catch (error) {
        
    }
});

// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado

module.exports = router;