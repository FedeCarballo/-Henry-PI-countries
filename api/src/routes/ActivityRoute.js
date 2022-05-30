const { Router } = require('express');
const express = require('express');
const { activitiesFromDB } = require('../Controller/DataController');
const {Activities, Country} = require('../db');
const router = Router();

// Traigo todas mis actividades de mi db: 
router.get('/', async (req,res) =>{
    try { 
       const activities = await Activities.findAll({
            include: {
                model: Country,
                atributes: [  "name", "capital","continente","subregion", "id"],
                through:{
                atributes:[]
                }
            }
       })
       if(!activities.length){
          return res.send([])
       }
        res.send(activities.length >0 ? activities : null )
    } catch (error) {
        res.send(error)
    }
})

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
router.post('/', async (req,res) =>{
    try {
        const { name, dificultad, duracion, temporada, imagen, country } = req.body; 
        const newActivity = await Activities.create({
             name, 
             dificultad, 
             duracion,
             temporada,
             imagen,
        });
        const ActivitiePerCountry = await Country.findAll({
            where:{
                name: country
            }
        })
        await newActivity.addCountry(ActivitiePerCountry);

        res.status(200).send('Activity created successfully')

    } catch (error) {
        res.send(error)
    }
})


// funcionalidades extra de enrutados: 

//eliminar actividades por id:
router.delete('/delete/:id', (req,res)=> {

    try {
        let {id} = req.params
        Activities.destroy({
            where: {
                id: id
            }
        })
        res.send("actividad eliminada")
    } catch (error) {
        
    }
})

// Filtro actividades por id de mi db: 
router.get('/:id', async (req,res)=>{
    try {
        let countries = await Activities.findAll();
        const id = req.params.id
        const SigleActivitie = countries.filter(c => id == c.id)
        
        if (!SigleActivitie.length) {
            return res.status(404).json({message: `No se encuentra actividad solicitada con el id: ${id}`});
        }
        return res.send(SigleActivitie);
    
        } catch (error) {
            next(error)
        }
})

module.exports = router;