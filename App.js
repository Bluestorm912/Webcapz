import React from "react";
import Firstpage from "./screen/onboarding/Firstpage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Secondpage from "./screen/onboarding/Secondpage";
import Home from "./screen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingScreen from "./screen/SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsScreen from "./screen/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator ();

function Draw() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
  )
}

function Blue() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor =focused ? "green" : "red";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Setting") {
              iconName = "cog";
            }
            return <Icon name={iconName} size={size} color={iconColor} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          component={Firstpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={Secondpage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainScreen"
          component={Draw}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
