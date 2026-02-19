import { NavigationContainer } from '@react-navigation/native';
import MainStackNaigator from './src/navigation/StackNavigator';
import { StackScreen } from 'react-native-screens';

export default function App() {
  return (
 <NavigationContainer>
    <MainStackNaigator initialRouteName="Home" />
    <StackScreen name="Home" component={MainStackNaigator} />
    <StackScreen name="About" component={MainStackNaigator} />
  <MainStackNaigator />
 </NavigationContainer>
  );
}

