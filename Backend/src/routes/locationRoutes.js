const express = require('express');
const { saveLocation, getLocations } = require('../controllers/locationController');

const router = express.Router();

// Rota para salvar localização
router.post('/alarm', saveLocation);

// Rota para listar localizações
router.get('/alarms', getLocations);

module.exports = router;
