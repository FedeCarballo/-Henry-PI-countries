const { Router } = require('express');
const { getAllCountries } = require('../Controller/DataController');

const router = Router();

router.use('/', getAllCountries);

module.exports = router;