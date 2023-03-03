import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { AppStyle } from '../theme/AppTheme';


export const CalculadoraScreen = () => {
    const { limpiar, armarNumero, btnDelete, positivoNegativo,
            btnDividir, btnMultiplicar, btnRestar, btnSumar,
            calcular, numero, numeroAnterior }=useCalculadora()

  return (
      <View style={ AppStyle.calculadoraContainer }>
        {
            ( numeroAnterior !== '0' )&&(
              <Text style={AppStyle.resultadopequeno}
              >{numeroAnterior}</Text>)
        }
          <Text style={AppStyle.resultado}
              numberOfLines={1}
              adjustsFontSizeToFit
          >{ numero }</Text>
          <View style={ AppStyle.fila }>
            {/* boton */}
              <BotonCalc texto='C' color='#9b9b9b' accion={ limpiar } />
              <BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo} />
              <BotonCalc texto='del' color='#9b9b9b' accion={btnDelete} />
              <BotonCalc texto='/' color='#FF9427' accion={btnDividir} />
          </View>
          <View style={AppStyle.fila}>
              {/* boton */}
              <BotonCalc texto='7' accion={ armarNumero } />
              <BotonCalc texto='8' accion={ armarNumero } />
              <BotonCalc texto='9' accion={ armarNumero } />
              <BotonCalc texto='X' accion={btnMultiplicar} color='#FF9427' />
          </View>
          <View style={AppStyle.fila}>
              {/* boton */}
              <BotonCalc texto='4' accion={ armarNumero } />
              <BotonCalc texto='5' accion={ armarNumero } />
              <BotonCalc texto='6' accion={ armarNumero } />
              <BotonCalc texto='-' accion={btnRestar} color='#FF9427' />
          </View>
          <View style={AppStyle.fila}>
              {/* boton */}
              <BotonCalc texto='1' accion={ armarNumero } />
              <BotonCalc texto='2' accion={ armarNumero } />
              <BotonCalc texto='3' accion={ armarNumero } />
              <BotonCalc texto='+' accion={btnSumar} color='#FF9427' />
          </View>
          <View style={AppStyle.fila}>
              {/* boton */}
              <BotonCalc texto='0' ancho accion={armarNumero} />
              <BotonCalc texto='.' accion={armarNumero} />
              <BotonCalc texto='=' color='#FF9427' accion={calcular} />
          </View>
    </View>
  )
}
