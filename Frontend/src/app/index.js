import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import logo from '../../assets/logo.png';
import HomeHeader from "../components/homeHeader";
import { requestForegroundPermissionsAsync } from "expo-location";
import { getLocations } from "../services/axiosCalls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AlarmItem from "../components/alarmItem";


export default function Home() {

    const [alarms, setAlarms] = useState([]);
    const [userId, setUserId] = useState(null);

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


    useEffect(() => {
        const fetchUserId = async () => {
            const Id = await AsyncStorage.getItem('@app_user_id');
            setUserId(Id);
        }
        fetchUserId();
    }, []);


    const fetchAlarms = async () => {
        if (!userId) {
            return;
        }
        try {
            const params = { userId: userId }; // Substitua pelo valor do parâmetro desejado
            const alarmsData = await getLocations(params);
            alarmsData.reverse();
            setAlarms(alarmsData);

        } catch (error) {
            console.error('Erro ao buscar os alarmes:', error);
        }
    };

    useEffect(() => {
        fetchAlarms();
    }, [userId]);

    const renderItem = ({ item }) => (
        <AlarmItem locName={item.destination} distanceRadius={item.distance} />
    );

    return (
        <View style={styles.container}>
            <HomeHeader fetchAlarms={fetchAlarms}/>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.name_title}> ChegaJá </Text>
            </View>
            <View style={styles.alarms}>
                {alarms.length > 0 ? (
                    <FlatList
                        data={alarms}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                ) :
                    <View style={styles.dontHaveView}>
                        <Text style={styles.dontHave}> Você Não Possui Alarmes </Text>
                    </View>
                }
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
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    dontHaveView: {
        paddingTop: 20,
    },

    dontHave: {
        fontSize: 20,
        color: '#9E9E9E',
        fontWeight: '400',
        opacity: 0.4,
    },

});
