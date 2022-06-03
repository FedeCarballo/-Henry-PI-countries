const { Router} = require('express');
const express = require('express')
const { GetCountriesdb, getCountries } = require('../Controller/DataController');
const {Country, Activities} = require('../db')
const router = Router();

router.use(express.json())

// [ ] GET /countries: [ ] GET /countries?name="...":
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
// Obtener un listado de los paises.
router.get('/',async (req,res,next) =>{

    let name = req.query.name;
    await GetCountriesdb()
    let countries = await getCountries();

    try {
        if(name){
            let SingleCountry = countries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            res.send(SingleCountry.length > 0 ? SingleCountry : res.status(404).send({message: `Country not found with name: ${name},Please check the entered values`}))
        }
        else{
            if (!countries.length>0) {
              return  res.status(404).json({message: "No se encontraron paises"}); //si no cargo los paises en mi db, mostrara este error 404
            }
            const c = await Country.findAll({
                include: {
                  model: Activities,
                  atributes: [],
                  through:{
                    atributes:[]
                    }
                }
              })
              return res.send(c) //finalmente si no doy ningun parametro y si el status es 200, devolvemos el listado completo de countries
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
    let countries = await Country.findAll(
       { include: {
            model: Activities,
            atributes: [  "name", "dificulty","duration","season"],
            through:{
                atributes:[]
                }
        }}
    );
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