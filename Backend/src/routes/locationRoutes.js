const express = require('express');
const { saveLocation, getLocations } = require('../controllers/locationController');

const router = express.Router();

// Rota para salvar localização
router.post('/location', saveLocation);

// Rota para listar localizações
router.get('/locations', getLocations);

module.exports = router;
