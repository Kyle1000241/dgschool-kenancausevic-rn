import React from 'react';
import {createStackNavigator} from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();


const MainStackNaigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ 
    headerStyle: {
        backgroundColor: '#f4511e',
   },
    headerTintColor: 'white',
}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>

);

export default MainStackNaigator;