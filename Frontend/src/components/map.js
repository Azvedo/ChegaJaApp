import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { watchPositionAsync, LocationAccuracy } from "expo-location";


export default function Map({distanceRadius , location}) {

    const [loc, setLoc] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapRef = useRef(null);

    useEffect(() => {
        const startWatching = async () => {
            const locationSubscription = await watchPositionAsync({
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1
            }, (response) => {
                setLoc(response.coords);
                setLoading(false);
            })
        }

        startWatching();
    }, []);


    if (loading || !loc || !location) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.mapContainer}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: location ? location.lat : loc.latitude,
                    longitude: location ? location.lng : loc.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.lat,
                        longitude: location.lng
                    }}
                />

                
                {/* Circle vai ser usado para criar um raio de alcance para o alarme| recebendo latitude e longitude do destino  */}
                <Circle 
                    center={{ 
                        latitude: location ? location.lat : 0,  
                        longitude: location ? location.lng : 0
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
        zIndex: 0,
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