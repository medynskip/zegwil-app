import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";

import React, { useState, useEffect } from "react";
import AppContext from "./pages/components/AppContext";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import CalculatorScreen from "./pages/CalculatorScreen";
import DisplayCalcScreen from "./pages/DisplayCalcScreen";
import AdminScreen from "./pages/AdminScreen";
import CalcProfileScreen from "./pages/CalcProfileScreen";
import CalcInputScreen from "./pages/CalcInputScreen";
import CalcCopyScreen from "./pages/CalcCopyScreen";
import ProfProfileScreen from "./pages/ProfProfileScreen";
import ProfInputScreen from "./pages/ProfInputScreen";
import ProfEditScreen from "./pages/ProfEditScreen";
import AdminLoginScreen from "./pages/AdminLoginScreen";
import DisplayProfScreen from "./pages/DisplayProfScreen";
import SetupScreen from "./pages/SetupScreen";

export default function App() {
  const [ipValue, setIpValue] = useState("AAA");

  const getCurrentIp = async () => {
    try {
      const value = await AsyncStorage.getItem("server_ip");
      if (value !== null) {
        setIpValue(value);
      }
    } catch (e) {
      console.log("problem:", e);
    }
  };

  const setCurrentIp = async (value) => {
    try {
      await AsyncStorage.setItem("server_ip", value);
    } catch (e) {
      console.log("problem:", e);
      // saving error
    } finally {
      getCurrentIp();
    }
  };

  useEffect(() => {
    getCurrentIp();
  }, []);

  const appSettings = {
    ipValue: ipValue,
    getCurrentIp,
    setCurrentIp,
  };

  return (
    <AppContext.Provider value={appSettings}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Kalkulator cięcia płyty" }}
            />
            <Stack.Screen name="Kalkulator" component={CalculatorScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Display" component={DisplayCalcScreen} />
            <Stack.Screen
              name="DisplayProf"
              component={DisplayProfScreen}
              options={{ title: "Szczegóły profilu" }}
            />
            <Stack.Screen
              name="AdminLogin"
              options={{ title: "Logowanie administratora" }}
              component={AdminLoginScreen}
            />
            <Stack.Screen name="Administracja" component={AdminScreen} />
            <Stack.Screen name="ParametryKalk" component={CalcProfileScreen} />
            <Stack.Screen name="WprowadzanieKalk" component={CalcInputScreen} />
            <Stack.Screen name="KopiowanieKalk" component={CalcCopyScreen} />
            <Stack.Screen
              name="ParametryProf"
              options={{ title: "Lista dostępnych profili" }}
              component={ProfProfileScreen}
            />
            <Stack.Screen
              name="EdycjaProfilu"
              options={{ title: "Edycja profilu" }}
              component={ProfEditScreen}
            />
            <Stack.Screen
              name="WprowadzanieProf"
              options={{ title: "Wprowadzanie profilu" }}
              component={ProfInputScreen}
            />
            <Stack.Screen
              name="SetupScreen"
              options={{ title: "Konfiguracja aplikacji" }}
              component={SetupScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
