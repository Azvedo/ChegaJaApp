import { useEffect } from "react";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Alert } from "react-native";

export const useLocationPermission = () => {
    useEffect(() => {
        const requestLocPermission = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                    Alert.alert('Precisamos de sua permissão para obter a localização');
                }
            } catch (error) {
                console.error("Erro ao obter permissão de localização:", error);
            }
        };
        requestLocPermission();
    }, []);
};