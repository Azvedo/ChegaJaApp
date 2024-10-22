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
        flexDirection: 'row',
        gap: 14,
    },

    formInput: {
        width: '86%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        width: '100%',
        height: 36,
        padding: 10,
        backgroundColor: '#EDECEC',
        marginBottom: 20,
        fontSize: 16,
        fontWeight: '500',
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
    },

});
