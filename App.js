import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/StackNavigator';
import { StackScreen } from 'react-native-screens';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
 <NavigationContainer>
  <DrawerNavigator />
 </NavigationContainer>
  );
}

