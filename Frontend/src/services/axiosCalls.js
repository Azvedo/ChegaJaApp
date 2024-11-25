import axios from 'axios';

// URL base do backend, teste com o IP da máquina
const baseURL = `http://10.0.0.137:3000`;

// Instância do Axios
const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//função para buscar localizações
export const getLocations = async (params) => {
  if (!params || !params.userId) {
    throw new Error('O parâmetro userId é obrigatório.');
  }

  try {
    const response = await api.post(`/api/get-user-alarms`, params);
    return response.data; // Retorna os dados recebidos da API
  } catch (error) {
    console.error('Erro ao buscar localizações:', error);
    throw error; // Propaga o erro para lidar no componente
  }
};

// Função para salvar localizações
export const postLocation = async (data) => {
  try {
    const response = await api.post(`/api/alarm`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar localização:', error);
    throw error; // Propaga o erro para lidar no componente
  }
};

export default api;
