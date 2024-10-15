import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Logo from "../../../assets/logo.png";

export default function Splash() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoSplash} />
            <Text style={styles.name}> Chega Já </Text>
            <StatusBar hidden={true} />
        </View>
    );
}

styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1B2038",
        alignItems: "center",
        justifyContent: "center",
    },

    logoSplash: {
        width: 111,
        height: 95,
    },

    name: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Poppins",
    },

});