const { Router} = require('express');
const express = require('express')
const { getAllCountries, GetCountriesdb } = require('../Controller/DataController');
const {Country} = require('../db')
const router = Router();

router.use(express.json())

// [ ] GET /countries: [ ] GET /countries?name="...":
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
// Obtener un listado de los paises.
router.get('/',async (req,res,next) =>{
    try {
        let name = req.query.name;
        let countries = await getAllCountries();
        if(name){
            let SingleCountry = countries.filter(c => c.name.toLowerCase() === name.toLowerCase())
            if(!SingleCountry.length>0){
              return  res.status(404).send({message: `No se encontro pais solicitado con el nombre: ${name}, por favor verifique si los caracteres ingresados son validos`}) 
              // me trae el mensaje de error con el name del pais seleccionado indicando que no matcheo el resultado, ya que el length sera 0
    
            }
            res.send(SingleCountry.length > 0 ? SingleCountry : ` ${name}`)
        }
        else{
            if (!countries.length>0) {
              return  res.status(404).json({message: "No se encontraron paises"}); //si no cargo los paises en mi db, mostrara este error 404
            }


            res.send(countries) //finalmente si no doy ningun parametro y si el status es 200, devolvemos el listado completo de countries
        }
    } catch (error) {
        next(error)
    }
    
});

// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:id',async (req,res,next) =>{
    try {
    let countries = await Country.findAll();
    const id = req.params.id
    const SingleCountry = countries.filter(c => id == c.id)
    if (!SingleCountry.length) {
        return res.status(404).json({message: `No se encontro el pais solicitado con el id: ${id}, por favor verifique si los caracteres ingresados son validos`});
        // me trae el mensaje de error con el id del pais seleccionado indicando que no matcheo el resultado, ya que el length sera 0, de lo contrario el matcheo seria correcto y haria el res.send correctamente
    }
    return res.send(SingleCountry);
    } catch (error) {
        next(error)
    }
});

//funcionalidades extra: 

//eliminar paises de mi db:

//eliminar actividades por id:
router.delete('/delete/:id', (req,res)=> {
    try {
        let {id} = req.params
        Country.destroy({
            where: {
                id: id
            }
        })
        res.send("pais eliminado correctamente")
    } catch (error) {
        
    }
})

module.exports = router;