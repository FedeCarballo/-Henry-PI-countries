const { Router } = require('express');
const CountryRoute = require('./CountryRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/countries', CountryRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
