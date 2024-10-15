import { View, Text, TextInput ,StatusBar, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import Logo from "../../../assets/logo.png";
import googleLogo from "../../../assets/logo_google.png";
import appleLogo from "../../../assets/logo_apple.png";


export default function Signup() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>Create Account</Text>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"#626262"} />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#626262"} />
            <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor={"#626262"} />
            <TouchableOpacity onPress={() => { Alert.alert("Sign Up") }} style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.loginWithSocial}>
                <TouchableOpacity onPress={() => { Alert.alert("Login com google") }} style={styles.social}>
                    <Image source={googleLogo} style={styles.socialLogo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Alert.alert("Login com apple") }} style={styles.social}>
                    <Image source={appleLogo} style={styles.socialLogo} />
                </TouchableOpacity>
            </View>
            <StatusBar barStyle={"light-content"} />
        </View>
    );
}

styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1B2038",
        alignItems: "center",
    },

    logo: {
        width: "15%",
        height: "8.5%",
        marginTop: "12%",
        marginBottom: "12%",
    },

    title: {
        color: "#EDECEC",
        fontSize: 32,
        fontWeight: "800",
        fontFamily: "Poppins",
        padding: 20,
    },

    input: {
        backgroundColor: "#F1F4FF",
        fontWeight: "600",
        width: "88%",
        height: "8.5%",
        padding: 15,
        borderRadius: 8,
        marginTop: 30,
    },

    forgot: {
        color: "#8E8F91",
        marginTop: 15,
        fontWeight: "700",
        fontFamily: "Poppins",
    },

    button: {
        marginTop: "10%",
        backgroundColor: "#303031",
        width: "88%",
        height: "8.3%",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 18,
        fontFamily: "Poppins",
    },

    loginWithSocial: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        width: "50%",
        marginTop: "10%",
    },

    social: {
        backgroundColor: "#F1F4FF",
        width: 60,
        height: 40,
        borderRadius: 10,
        marginTop: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    socialLogo: {
        width: 15,
        height: 15,
    },

});
