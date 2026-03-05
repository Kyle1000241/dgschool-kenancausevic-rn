import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStackNavigator, MainStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarStyle: {
          backgroundColor: "#FF6347",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="video-stabilization"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ios"
        component={IosStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cellphone"
              size={26}
              color={color}
            />
          ),
          tabBarLabel: "iOS",
        }}
      />
      <Tab.Screen
        name="Android"
        component={AndroidStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="android"
              size={26}
              color={color}
            />
          ),
          tabBarLabel: "Android",
        }}
      />
    </Tab.Navigator>
    
  );
};

export default BottomTabNavigator;