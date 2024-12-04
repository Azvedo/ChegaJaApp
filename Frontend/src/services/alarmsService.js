import AsyncStorage from "@react-native-async-storage/async-storage";

const ALARM_KEY = 'alarm';

export const postAlarm = async (alarm) => {
    try {
        const storedAlarms = await getAlarms();
        const alarms = storedAlarms ? storedAlarms : [];
        alarms.push(alarm);
        const jsonValue =  JSON.stringify(alarms);
        await AsyncStorage.setItem(ALARM_KEY , jsonValue);
    } catch (error) {
        console.error('Erro ao salvar alarme:', error);
        throw error;
    }
}

export const getAlarms = async () => {
    try {
        const alarms = await AsyncStorage.getItem(ALARM_KEY);
        return alarms ? JSON.parse(alarms) : [];
    } catch (error) {
        console.error('Erro ao buscar alarmes:', error);
        throw error;
    }
}

