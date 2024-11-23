import { createContext, useState, useContext, useEffect } from 'react';
import { getOrCreateUserId } from '../services/userIdentifier';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeUser();
  }, []);

  const initializeUser = async () => {
    try {
      setIsLoading(true);
      const id = await getOrCreateUserId();
      setUserId(id);
    } catch (error) {
      console.error('Erro ao inicializar usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userId, isLoading, initializeUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar o userId
export const useUserId = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserId deve ser usado dentro de UserProvider');
  }
  return context.userId;
};