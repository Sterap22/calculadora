import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: ( numeroTexto:string ) => void;
}
export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>accion( texto )}
    >
      <View style={{
        ...styleBoton.boton,
        backgroundColor: color,
        width: ( ancho ) ? 180 : 80
        }}>
          <Text style={[
            styleBoton.botonTexto, 
                  { color: color !== '#9b9b9b' ? '#fff' : "#000" }
            ]}>
                {texto}
            </Text>
      </View>
    </TouchableOpacity>
  )
}
const styleBoton = StyleSheet.create({
    boton: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400',
    }
})
