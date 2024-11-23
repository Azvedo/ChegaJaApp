const db = require('../config/firebase.js');

const saveAlarm = async (data) => {
    try {
        const { userId, currentLocation, distance } = data;
        if (!userId || !currentLocation || !distance) {
            throw new Error("Dados insuficientes");
        }

        const alarmData = {
            userId: userId,
            currentLocation: currentLocation,
            distance: distance,
            createdAt: new Date().toISOString(),
        };

        const docRef = await db.collection('Alarms').add(alarmData);
        console.log("Alarme salvo com sucesso:", docRef.id);

        return { id: docRef.id };
    } catch (error) {
        console.error("Erro ao salvar o alarme:", error);
        throw error;
    }
};

module.exports = { saveAlarm };
