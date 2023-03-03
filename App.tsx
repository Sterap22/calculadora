import { SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { AppStyle } from './src/theme/AppTheme';

export const App = () => {
  return (
    <SafeAreaView style={ AppStyle.fondo }>
      <StatusBar backgroundColor='#000' barStyle='light-content'/>
      <CalculadoraScreen />
    </SafeAreaView>
  )
}
