const db = require('../config/firebase.js');

const saveAlarm = async (data) => {
    try {
        const { userId, currentLocation, distance, destination } = data;
        if (!userId || !currentLocation || !distance || !destination) {
            throw new Error("Dados insuficientes");
        }

        const alarmData = {
            destination: destination,
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

const getAlarms = async (userId) => {
    if (!userId) {
        throw new Error("userId é obrigatório");
    }

    try {
        const alarmsRef = db.collection('Alarms');
        const snapshot = await alarmsRef.where('userId', '==', userId).get();

        if (snapshot.empty) {
            console.log(`Nenhum alarme encontrado para o usuário ${userId}`);
            return [];
        }

        const alarms = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(`Alarmes encontrados para o usuário ${userId}:`, alarms);

        return alarms;
    } catch (error) {
        console.error(`Erro ao buscar os alarmes para o usuário ${userId}:`, error);
        throw error;
    }
};


module.exports = { saveAlarm, getAlarms };
