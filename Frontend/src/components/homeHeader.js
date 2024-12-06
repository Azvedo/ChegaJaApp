import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import CreateModal from "./createModal";
import { ALERT_TYPE, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function HomeHeader({fetchAlarms, toggleEditMode}) {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleSaveAlarm = (success, message) => {
        toggleModal();
        if (success) {
            Toast.show({ type: ALERT_TYPE.SUCCESS, title: 'Alarme salvo com sucesso!'});
            fetchAlarms();
        } else {
            Toast.show({ type: ALERT_TYPE.DANGER, title: 'Erro ao salvar alarme', textBody: message });
        }
    };

    return (
        <View style={styles.test}>
            <AlertNotificationRoot>
            <View style={styles.features}>
                <TouchableOpacity onPress={toggleEditMode} >
                    <Text style={styles.edit}> Editar </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>

                <CreateModal
                    visible={modalVisible}
                    toggleModal={toggleModal}
                    handleSave={handleSaveAlarm}
                />
            </View>
            </AlertNotificationRoot>
        </View>
    );
}

const styles = StyleSheet.create({

    test: {
        width: '100%',
        height: '10%',
    },


    features: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
    },

    edit: {
        fontSize: 20,
        color: 'white',
    },
});