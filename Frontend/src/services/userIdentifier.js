import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const USER_ID_KEY = '@app_user_id';

export const getOrCreateUserId = async () => {
  try {
    // Tenta obter o ID do usuário
    let userId = await AsyncStorage.getItem(USER_ID_KEY);
    
    // Se não existir, cria um novo
    if (!userId) {
      userId = uuid.v4();
      await AsyncStorage.setItem(USER_ID_KEY, userId);
    }
    return userId;

  } catch (error) {
    console.error('Erro ao obter/criar userId:', error);
    return uuid.v4();
  }
};
