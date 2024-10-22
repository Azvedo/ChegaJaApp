import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from "expo-location";


export default function Map() {

    const [location, setLocation] = useState(null);

    async function requestLocPermission() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
            Alert.alert('Precisamos de sua permissão para obter a localização');
        } else {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocPermission();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response);
            console.log(response.coords);
        })
    }, []);

    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location ? location.coords.latitude : 0,
                    longitude: location ? location.coords.longitude : 0,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location ? location.coords.latitude : 0,
                        longitude: location ? location.coords.longitude : 0
                    }}
                />
            </MapView>

        </View>
    );
}


const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: "69%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },

})