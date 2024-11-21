import axios from 'axios';

// URL base do backend, teste com o IP da máquina
const baseURL = `http://192.168.10.78:3000`;

// Instância do Axios
const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função GET para buscar localizações
export const getLocations = async () => {
  try {
    const response = await api.get(`/api/locations`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar localizações:', error);
    throw error; // Propaga o erro para lidar no componente
  }
};

// Função POST para salvar localizações
export const postLocation = async (data) => {
  try {
    const response = await api.post(`/api/location`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar localização:', error);
    throw error; // Propaga o erro para lidar no componente
  }
};

export default api;
