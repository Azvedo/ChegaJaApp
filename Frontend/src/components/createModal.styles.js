import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(27, 32, 56, 1)', // Fundo semitransparente
    },

    modalView: {
        position: 'absolute',
        top: '4%',
        width: '100.5%',
        height: '96%',
        backgroundColor: '#1B1D29',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderWidth: 0.3,
        borderColor: '#BEBEBE',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },

    buttonContainer: {
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '98%',
        marginBottom: 20,
    },

    button: {
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
    },

    form: {
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 10,
        gap: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },


    formInput: {
        flex: 1,
        width: '50%',
        justifyContent: 'center',
    },

    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 2,
        color: 'black',
        marginBottom: 10,
    },


    autocompleteContainer: {
        flex: 1,
        zIndex: 10, // Para garantir que a lista de resultados apareça acima de outros componentes
    },

    listView: {
        top: 40,
        position: 'absolute',
        backgroundColor: 'white',
        height: 240,
        zIndex: 10,
    },

    row: {
        padding: 13,
        height: 44,
        flexDirection: 'row',
    },

    description: {
        fontWeight: 'bold',
    },

    predefinedPlacesDescription: {
        color: '#1faadb',
    },

    distToAlarm: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 34,
    },


    distToAlarmText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        marginRight: 10,
    },

    infoIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 16,
        height: 16,
        borderRadius: 15,
        backgroundColor: '#B2B2B2',
    },

    distToAlarmSelect: {
        marginLeft: "10%",
        alignItems: 'center',
        width: '86%',
        height: 48,
        paddingHorizontal: 24,
        marginBottom: 10,
        zIndex: 1,
    },

});


export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: '100%',
        height: 28,
        marginTop: 10,
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: '#EDECEC',
        color: '#1B1D29',
        fontWeight: '700',
        marginBottom: 10,
        borderRadius: 2,
    },

    inputAndroid: {
        width: 296,
        height: 36,
        marginTop: 10,
        marginRight: '1%',
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#EDECEC',
        color: '#1B1D29',
        fontWeight: '600',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
});