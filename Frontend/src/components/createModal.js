import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './createModal.styles';
import Map from './map';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { postLocation } from '../services/axiosCalls';
import { API_KEY } from '@env';
import { useUserId } from '../contexts/UserContext';


export default function CreateModal({ visible, toggleModal, handleSave }) {
    const distances = [
        { label: '1 km', value: 1000 },
        { label: '1.5 km', value: 1500 },
        { label: '2 km', value: 2000 },
        { label: '2.5 km', value: 2500 },
        { label: '3 km', value: 3000 },
    ];

    const [distanceRadius, setDistanceRadius] = useState(null);
    const [destination, setDestination] = useState(null);
    const [locName, setLocName] = useState(null);

    const isValid = destination && distanceRadius && locName;  //caso o destino e a distância sejam válidos, o botão de salvar é habilitado

    const userId = useUserId();


    const saveAlarm = async () => {
        if (!isValid) {
            Alert.alert('Erro', 'Por favor, selecione um destino e uma distância válida.');
            return;
        }

        try {
            const data = {
                destination: locName,
                currentLocation: {
                    latitude: destination.lat,
                    longitude: destination.lng,
                },
                distance: distanceRadius,
                userId: String(userId), // Adiciona o userId ao objeto data como string
            };

            const response = await postLocation(data);

            setDestination(null);
            setDistanceRadius(null);
            handleSave(true, 'Alarme salvo com sucesso!');
            toggleModal();

        } catch (error) {
            console.error('Erro ao salvar localização:', error);
            handleSave(false, 'Erro ao salvar alarme');
        }
    };

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
                            <TouchableOpacity onPress={toggleModal} style={styles.button}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={saveAlarm}
                                style={[styles.button, { opacity: isValid ? 1 : 0.5 }]}
                                disabled={!isValid}
                            >
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>


                        </View>

                        <View style={styles.form}>
                            <Ionicons name="location" size={28} color="#fff" />
                            <View style={styles.formInput}>
                                <GooglePlacesAutocomplete
                                    placeholder="Qual o seu destino?"
                                    fetchDetails={true}
                                    onPress={(data, details = null) => {
                                        setDestination(details.geometry.location);
                                        setLocName(data.description);
                                    }}
                                    query={{
                                        key: API_KEY,
                                        language: 'pt-br',
                                    }}
                                    styles={{
                                        textInput: styles.input,
                                        container: styles.autocompleteContainer,
                                        listView: styles.listView,
                                        row: styles.row,
                                        description: styles.description,
                                        predefinedPlacesDescription: styles.predefinedPlacesDescription,
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.distToAlarm}>
                            <Text style={styles.distToAlarmText}>Distância para o alarme:</Text>
                            <TouchableOpacity
                                style={styles.infoIcon}
                                onPress={() => Alert.alert('Distância para o alarme', 'Selecione a distância em que deseja ser alertado.')}
                            >
                                <Ionicons name="information" size={14} color="#1B1D29" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.distToAlarmSelect}>
                            <RNPickerSelect
                                onValueChange={(value) => setDistanceRadius(value)}
                                items={distances}
                                placeholder={{ label: 'Selecione a distância', value: null }}
                                style={pickerSelectStyles}
                                useNativeAndroidPickerStyle={false}
                            />
                        </View>
                        <Map distanceRadius={distanceRadius} location={destination} />
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
        borderRadius: 2,
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
        borderRadius: 2,
    },
});