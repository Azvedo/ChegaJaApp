const express = require('express');
const { saveLocation, getLocations } = require('../controllers/locationController');

const router = express.Router();

// Rota para salvar localização
router.post('/alarm', saveLocation);

// Rota para listar localizações
// Estou usando post para poder enviar o userId no body da requisição
router.post('/get-user-alarms', getLocations);

module.exports = router;
