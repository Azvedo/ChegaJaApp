import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from "expo-location";


export default function Map({distanceRadius}) {

    const [loc, setLoc] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const startWatching = async () => {
            const locationSubscription = await watchPositionAsync({
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1
            }, (response) => {
                setLoc(response.coords);
                setLoading(false);
                console.log(response.coords);
            })
        }

        startWatching();
    }, []);


    if (loading || !loc) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker
                    coordinate={{
                        latitude: loc.latitude,
                        longitude: loc.longitude
                    }}
                />
                
                {/* Circle vai ser usado para criar um raio de alcance para o alarme| recebendo latitude e longitude do destino  */}
                <Circle 
                    center={{ 
                        latitude: loc.latitude,  
                        longitude: loc.longitude
                    }}
                    radius={distanceRadius}
                    fillColor="rgba(0, 0, 255, 0.3)"
                    strokeColor="rgba(0, 0, 255, 0.0)"
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

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})