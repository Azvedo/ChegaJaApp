const locations = []; // Simulação de um banco de dados

// Controlador para salvar localização
const saveLocation = (req, res) => {
  const { currentLocation , distance } = req.body;
  console.log('Localização atual:', currentLocation, distance);

  if (!currentLocation) {
    return res.status(400).send({ error: 'Localização não fornecida' });
  }

  // Adicionar ao "banco de dados"
  locations.push({currentLocation, distance});
  console.log('Localizações:', locations); //apagar depois

  res.status(201).send({ message: 'Localização salva com sucesso!' });
};

// Controlador para listar todas as localizações (apenas para teste)
const getLocations = (req, res) => {
  res.status(200).send({ locations });
};

module.exports = { saveLocation, getLocations };
