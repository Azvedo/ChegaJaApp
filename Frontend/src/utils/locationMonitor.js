import * as TaskManager from 'expo-task-manager';
import { startLocationUpdatesAsync, watchPositionAsync, Accuracy } from "expo-location";
import { haversineDistanceM } from "./haversineFunction";

const LOCATION_TASK = "BACKGROUND_LOCATION_TASK";

// Função para iniciar o monitoramento de localização em segundo plano
export const startLocationTracking = async (alarmLocation, onAlarmReached, distance) => {
    try {
        await startLocationUpdatesAsync("LOCATION_TASK", {
            accuracy: Accuracy.High,
            timeInterval: 30000, // Atualizar a cada 30 segundos
            distanceInterval: 50, // Atualizar a cada 50 metros
            foregroundService: {
                notificationTitle: "ChegaJá",
                notificationBody: "Monitorando sua localização.",
                notificationColor: "#1B2038",
            },
        });

        TaskManager.defineTask(LOCATION_TASK, ({ data: { locations }, error }) => {
            if (error) {
                console.error("Erro ao monitorar localização em segundo plano:", error);
                return;
            }

            if (locations && locations.length > 0) {
                const { latitude, longitude } = locations[0].coords;
                const distanceToAlarm = haversineDistanceM(latitude, longitude, alarmLocation.latitude, alarmLocation.longitude);

                if (distanceToAlarm < distance) {
                    onAlarmReached();
                }
            }

        });
        console.log("Monitoramento em segundo plano iniciado.");
    } catch (error) {
        console.error("Erro ao iniciar monitoramento em segundo plano:", error);
    }
};

// Função para monitorar a posição em tempo real no foreground
export const watchPosition = async (alarmLocation, onAlarmReached, distance) => {
    return await watchPositionAsync(
        { accuracy: Accuracy.High },
        (newLocation) => {
            const currentLocation = newLocation.coords;

            const distanceToAlarm = haversineDistanceM(currentLocation.latitude, currentLocation.longitude, alarmLocation.latitude, alarmLocation.longitude);
            console.log(`Distância até o alarme: ${distanceToAlarm} metros`);

            if (distanceToAlarm <= distance) {
                onAlarmReached(); // Aciona o alarme
            }
        }
    );
};
