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
        
    }
}

export const getAlarms = async () => {
    try {
        const alarms = await AsyncStorage.getItem(ALARM_KEY);
        return alarms ? JSON.parse(alarms) : [];
    } catch (error) {
        console.error('Erro ao buscar alarmes:', error);
    }
}


export const deleteAlarm = async (alarmId) => {
    try {
        const storedAlarms = await getAlarms();
        const alarms = storedAlarms.filter(alarm => alarm.alarmId !== alarmId);
        const jsonValue = JSON.stringify(alarms);
        await AsyncStorage.setItem(ALARM_KEY, jsonValue);
        console.log('Alarme deletado com sucesso, id:', alarmId);
    } catch (error) {
        console.error('Erro ao deletar alarme:', error);
    }

}


export const updateAlarm = async (alarmId, alarm) => {
    try {
        const storedAlarms = await getAlarms();
        const alarms = storedAlarms.map(a => a.alarmId === alarmId ? alarm : a);
        const jsonValue = JSON.stringify(alarms);
        await AsyncStorage.setItem(ALARM_KEY, jsonValue);
        console.log('Alarme atualizado com sucesso, id:', alarmId);
    } catch (error) {
        console.error('Erro ao atualizar alarme:', error);
    }
}