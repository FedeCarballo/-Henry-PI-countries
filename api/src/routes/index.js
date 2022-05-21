const { Router } = require('express');
const CountryRoute = require('./CountryRoute')
const ActivityRoute = require('./ActivityRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/countries', CountryRoute)
router.use('/activities', ActivityRoute)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
