import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    alarmItem: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        paddingHorizontal: 16,
        marginVertical: 2,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        width: '100%',
    },

    alarmItemEditMode:{
        justifyContent: 'space-around',
        gap: 52,
    },

    Info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '60%',
    },

    alarmTextName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    alarmTextdistance: {
        paddingLeft: 2,
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
    },


})