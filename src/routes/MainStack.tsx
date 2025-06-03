import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import { MainStackParamList } from "../types/MainStackList";
import Cadastro from "../screens/cadastro/Cadastro";
import Home from '../screens/home';
import Perfil from '../screens/Perfil';
import Questoes from '../screens/Questoes';
import Audios from '../screens/Audios';
import Banca from '../screens/Banca';
import Videos from '../screens/Videos';
import Artigos from '../screens/Artigos';

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Banca" component={Banca} />
      <Stack.Screen name="Questoes" component={Questoes} />
      <Stack.Screen name="Audios" component={Audios} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Artigos" component={Artigos} />
      <Stack.Screen name="Perfil" component={Perfil} />
      {/* <Stack.Screen name="App" component={AppRoutes} /> */}
    </Stack.Navigator>
  );
}
