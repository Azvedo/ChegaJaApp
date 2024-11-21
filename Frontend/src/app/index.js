import { useEffect} from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logo from '../../assets/logo.png';
import HomeHeader from "../components/homeHeader";
import { requestForegroundPermissionsAsync} from "expo-location";
import { Alarms } from "../constants/bdTest";

export default function Home() {

    async function requestLocPermission() {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                Alert.alert('Precisamos de sua permissão para obter a localização');
            }
        } catch (error) {
            console.error("Erro ao obter permissão de localização:", error);
        }
    }

    useEffect(() => {
        requestLocPermission();
    }, []);
    

    return (
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.name_title}> ChegaJá </Text>
            </View>
            <View style={styles.alarms}>
            {Alarms.length === 0 ? (
                    <Text style={styles.dontHave}> Você Não Possui Alarmes </Text>
                ) : (
                    Alarms.map((alarm, index) => (
                        <View key={index} style={styles.alarmItem}>
                            <Text style={styles.alarmText}>Destino: {alarm.destination.lat}, {alarm.destination.lng}</Text>
                            <Text style={styles.alarmText}>Distância: {alarm.distanceRadius} metros</Text>
                        </View>
                    ))
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1B2038',
    },

    features: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 20,
        color: 'white',
    },

    header: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 24,
        width: '100%',
        height: '10%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },

    logo: {
        width: 56,
        height: 56,
    },

    name_title: {
        fontSize: 32,
        color: 'white',
        fontWeight: '600',
    },

    alarms: {
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    dontHave: {
        fontSize: 20,
        color: '#9E9E9E',
        fontWeight: '400',
        opacity: 0.4,
    },

});
