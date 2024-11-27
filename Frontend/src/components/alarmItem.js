import { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

export default function AlarmItem({ locName, distanceRadius }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.alarmItem}>
            <View style={styles.Info}>
                <Text style={styles.alarmTextName}> {locName} </Text>
                <Text style={styles.alarmText}>Distância para Alarme: {distanceRadius} m</Text>
            </View>
            <Switch
                trackColor={{ false: "#767577", true: "#30db5b" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    alarmItem: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 16,
        marginVertical: 2,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        width: '100%',
    },

    Info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    alarmTextName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    alarmText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
    },


})