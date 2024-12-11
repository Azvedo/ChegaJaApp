import * as Location from "expo-location";
import { Alert } from "react-native";

export const requestLocationPermissions = async () => {
    try {
        const { granted: foregroundGranted } = await Location.requestForegroundPermissionsAsync();
        if (!foregroundGranted) {
            Alert.alert("Precisamos de sua permissão para acessar a localização enquanto o app está em uso.");
            return { foregroundGranted: false, backgroundGranted: false };
        }

        const { granted: backgroundGranted } = await Location.requestBackgroundPermissionsAsync();
        if (!backgroundGranted) {
            Alert.alert("Precisamos de sua permissão para acessar a localização em segundo plano.");
            return { foregroundGranted: true, backgroundGranted: false };
        }
        return { foregroundGranted: true, backgroundGranted: true };
    } catch (error) {
        console.error("Erro ao solicitar permissões de localização:", error);
        return { foregroundGranted: false, backgroundGranted: false };
    }
};
