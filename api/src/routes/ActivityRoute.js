const { Router } = require('express');
const { getAllActivities } = require('../Controller/DataController');


const router = Router();

router.use('/', getAllActivities);

module.exports = router;