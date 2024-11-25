const { saveAlarm, getAlarms } = require('./firebaseController.js');

// Controlador para salvar localização
const saveLocation = async (req, res) => {
    const { userId, currentLocation, distance, destination } = req.body;

    if (!currentLocation) {
        return res.status(400).send({ error: 'Localização não fornecida' });
    }

    try {
        const result = await saveAlarm({
            destination: destination,
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

// Controloador para buscar localizações
const getLocations = (req, res) => {
    const { userId } = req.body; // Obtém userId dos parâmetros da rota

    if (!userId) {
        return res.status(400).send({ error: 'O userId é obrigatório.' });
    }
    getAlarms(userId)
        .then((alarms) => {
            res.status(200).send(alarms);
        })
        .catch((error) => {
            console.error('Erro ao buscar as localizações:', error);
            res.status(500).send({ error: 'Erro ao buscar as localizações. Tente novamente mais tarde.' });
        });
};


module.exports = { saveLocation, getLocations };
