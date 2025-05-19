import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import { MainStackParamList } from "../types/MainStackList";
import Cadastro from "../screens/cadastro/Cadastro";
import Home from '../screens/home';

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="App" component={AppRoutes} /> */}
    </Stack.Navigator>
  );
}
