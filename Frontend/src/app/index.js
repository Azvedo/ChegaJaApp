import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import logo from '../../assets/logo.png';
import HomeHeader from "../components/homeHeader";

export default function Home() {
    return (
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.name_title}> ChegaJá </Text>
            </View>
            <View style={styles.alarms}>
                {/* if(alarms)else */}
                <Text style={styles.dontHave}> Você Não Possui Alarmes </Text>
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
