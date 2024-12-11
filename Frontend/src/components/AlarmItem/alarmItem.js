import { useState, useEffect} from "react";
import Animated from 'react-native-reanimated';
import { Text, View, Switch, TouchableOpacity, Alert } from "react-native";
import { styles } from "./alarmItem.styles";
import { Ionicons } from '@expo/vector-icons';
import { deleteAlarm } from "../../services/alarmsService";
import { useAlarmItemAnimations } from "./alarmItem.animation";
import EditModal from "../Modals/editModal";
import {startLocationTracking, watchPosition} from "../../utils/locationMonitor";



export default function AlarmItem({alarm, editMode, fetchAlarms}) {

    const { switchAnimatedStyle, trashAnimatedStyle, createAnimatedStyle, infoAnimatedStyle } = useAlarmItemAnimations(editMode);
    const [isEnabled, setIsEnabled] = useState(false);

    const [editModalVisible, setEditModalVisible] = useState(false);

    const toggleEditModal = () => {
        setEditModalVisible(!editModalVisible);
    }

    useEffect(() => {
        if (isEnabled) {
            watchPosition(alarm.currentLocation, () => {
                Alert.alert('Alarme Chegou', `Você chegou em ${alarm.destination}`);
                setIsEnabled(false);
            }, alarm.distance);
                     
            // startLocationTracking(alarm.currentLocation, () => {
            //     Alert.alert('Alarme Chegou', `Você chegou em ${alarm.destination}`);
            // }, alarm.distance);
        }
    }, [isEnabled]);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const confirmDelete = () => {
        Alert.alert('Deletar Alarme', 'Deseja realmente deletar este alarme?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Deletar',
                onPress: () => {
                    deleteAlarm(alarm.alarmId)
                        .then(() => fetchAlarms());

                }
            }
        ])
    }

    return (
        <View style={[styles.alarmItem, editMode && styles.alarmItemEditMode]}>
            <Animated.View style={trashAnimatedStyle}>
                {editMode && (
                    <TouchableOpacity onPress={confirmDelete}>
                        <Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                )}
            </Animated.View>
            <Animated.View style={[styles.Info, infoAnimatedStyle]}>
                <Text style={styles.alarmTextName}>{alarm.destination}</Text>
                <Text style={styles.alarmTextdistance}>
                    Distância para Alarme: {alarm.distance} m
                </Text>
            </Animated.View>
            <Animated.View style={switchAnimatedStyle}>
                {!editMode && (
                    <Switch
                        trackColor={{ false: '#767577', true: '#30db5b' }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                )}
            </Animated.View>
            <Animated.View style={createAnimatedStyle}>
                {editMode && (
                    <TouchableOpacity onPress={toggleEditModal}>
                        <Ionicons name="create-outline" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </Animated.View>

            <EditModal 
                visible={editModalVisible} 
                toggleEditModal={toggleEditModal} 
                alarm={alarm} 
                fetchAlarms={fetchAlarms}
            />
        </View>
    );
}

