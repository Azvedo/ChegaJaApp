import { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { styles } from "./alarmItem.styles";

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

