import { View, Text, TouchableOpacity, TextInput, Modal, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './createModal.styles';
import Map from '../Map/map';


export default function CreateModal({ visible, toggleModal }) {
    const distances = [
        { label: '250 m', value: 250 },
        { label: '500 m', value: 500 },
        { label: '1 km', value: 1000 },
        { label: '1.5 km', value: 1500 },
        { label: '2 km', value: 2000 },
    ];

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => toggleModal()} style={styles.button}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Alert.alert("Envia para o BD") }} style={styles.button}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                        <Ionicons name="location" size={28} color="#fff" />
                        <View style={styles.formInput}>
                            <TextInput placeholder="Qual o seu destino ?" style={styles.input} placeholderTextColor={"#979797"} />
                        </View>
                    </View>
                    <View style={styles.distToAlarm}>
                        <Text style={styles.distToAlarmText}>Distância para o alarme:</Text>
                        <TouchableOpacity style={styles.infoIcon} onPressIn={() => { Alert.alert("Distância do destino para disparar o alarme") }}>
                            <Ionicons name="information" size={14} color="#1B1D29" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.distToAlarmSelect}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={distances}
                            placeholder={{ label: 'Selecione a distância', value: null }}
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                    <Map />
                </View>
            </View>
        </Modal>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        height: 28,
        marginTop: 10,
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: '#EDECEC',
        color: '#1B1D29',
        fontWeight: '700',
        marginBottom: 10,
    },

    inputAndroid: {
        width: 296,
        height: 36,
        marginTop: 10,
        marginRight: '1%',
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#EDECEC',
        color: '#1B1D29',
        fontWeight: '600',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});