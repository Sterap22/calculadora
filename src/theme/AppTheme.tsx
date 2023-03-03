import { StyleSheet } from "react-native";

export const AppStyle = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000',
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    resultadopequeno:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
        marginBottom: 10
    },
    resultado: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    }
})