import { Text, View, StyleSheet, TouchableOpacity, StatusBar} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import CreateModal from "./CreateModal/createModal";

export default function HomeHeader() {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.features}>
            <TouchableOpacity >
                <Text style={styles.edit}> Editar </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
                <Ionicons name="add" size={32} color="white" />
            </TouchableOpacity>

            <CreateModal
                visible={modalVisible}
                toggleModal= {toggleModal}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    features: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        paddingHorizontal: 16,
    },

    edit: {
        fontSize: 20,
        color: 'white',
    },
});