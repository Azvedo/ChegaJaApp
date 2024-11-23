const { saveAlarm } = require('./firebaseController.js');

const locations = []; // Simulação de um banco de dados

// Controlador para salvar localização
const saveLocation = async (req, res) => {
    const { userId, currentLocation, distance } = req.body;

    if (!currentLocation) {
        return res.status(400).send({ error: 'Localização não fornecida' });
    }

    try {
        const result = await saveAlarm({
            userId: userId,
            currentLocation: currentLocation,
            distance: distance,
        });

        console.log('Localização salva no BD com sucesso!');
        res.status(201).send({ message: 'Localização salva com sucesso!', alarmId: result.id });
    } catch (error) {
        console.error('Erro ao salvar localização:', error);
        res.status(500).send({ error: 'Erro ao salvar localização. Tente novamente mais tarde.' });
    }
};

// Controlador para listar todas as localizações (apenas para teste)
const getLocations = (req, res) => {
  res.status(200).send({ locations });
};

module.exports = { saveLocation, getLocations };
