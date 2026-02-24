import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#FF6347",
        drawerStyle: {
          width: "70%",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          title: "About",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "information" : "information-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;