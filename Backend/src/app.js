require('dotenv').config();

const app = require('./config/server');
const locationRoutes = require('./routes/locationRoutes');

// Configuração de rotas
app.use('/api', locationRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
