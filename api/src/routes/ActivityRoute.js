const { Router } = require('express');
const express = require('express');
const { activitiesFromDB } = require('../Controller/DataController');
const {Activities} = require('../db');
const router = Router();


router.get('/', async (req,res) =>{
    try { 
       const activities = await activitiesFromDB();
        res.send(activities.length>0 ? activities : [])
    } catch (error) {
        res.send(error)
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