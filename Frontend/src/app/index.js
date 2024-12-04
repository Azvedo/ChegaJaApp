import { useEffect, useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import logo from '../../assets/logo.png';
import HomeHeader from "../components/homeHeader";
import AlarmItem from "../components/alarmItem";
import { styles } from './index.styles';
import { useLocationPermission } from "../hooks/useLocationPermission";
import { getAlarms} from "../services/alarmsService";


export default function Home() {

    const [alarms, setAlarms] = useState([])

    useLocationPermission();

    const fetchAlarms = async () => {
        try {
            const response = await getAlarms();
            setAlarms(response);
        } catch (error) {
            console.error('Erro ao buscar alarmes:', error);
        }
    }

    useEffect(() => {
        fetchAlarms();
    }, []);

    const renderItem = ({ item }) => (
        <AlarmItem locName={item.destination} distanceRadius={item.distance} />
    );

    return (
        <View style={styles.container}>
            <HomeHeader fetchAlarms={fetchAlarms} />
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.name_title}> ChegaJá </Text>
            </View>
            <View style={styles.alarms}>
                {alarms.length > 0 ? (
                    <FlatList
                        data={alarms}
                        renderItem={renderItem}
                        keyExtractor={item => item.alarmId}
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

