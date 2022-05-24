const { Router } = require('express');
const express = require('express');
const { activitiesFromDB } = require('../Controller/DataController');
const {Activities} = require('../db');
const router = Router();

// Traigo todas mis actividades de mi db: 
router.get('/', async (req,res) =>{
    try { 
       const activities = await activitiesFromDB();

       if(!activities.length){
          return res.send("No hay actividades")
       }
        res.send(activities)
    } catch (error) {
        res.send(error)
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

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
router.post('/', async (req,res) =>{
    try {
        const { name, dificultad, duracion, temporada, imagen } = req.body; 
        const newActivity = await Activities.create({
            name: name, 
            dificultad: dificultad, 
            duracion: duracion,
            temporada: temporada,
            imagen: imagen,
        });
        res.send(newActivity);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;