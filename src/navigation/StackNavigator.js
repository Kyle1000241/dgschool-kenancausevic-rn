import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF6347",
      },
      headerTintColor: "white",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const AboutStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF6347",
      },
      headerTintColor: "white",
      headerShown: false,
    }}
  >
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

const IosStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF6347",
      },
      headerTintColor: "white",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Ios" component={Ios} />
  </Stack.Navigator>
);
const AndroidStackNavigator = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF6347",
      },
      headerTintColor: "white",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Android" component={Android} />
  </Stack.Navigator>
);


export { MainStackNavigator, AboutStackNavigator, IosStackNavigator };