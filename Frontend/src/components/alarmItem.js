import { Text, View } from "react-native";

export default function AlarmItem({ alarm }) {
    return (
        <View style={styles.alarmItem}>
            <Text style={styles.alarmText}> {alarm.text} </Text>
            <Text style={styles.alarmText}>Distância: {alarm.distanceRadius} metros</Text>
        </View>
    );
}