import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/Login';
import { MainStackParamList } from "../types/MainStackList";
import CadastroOne from "../screens/cadastro/CadastroOne";
import CadastroTwo from "../screens/cadastro/CadastroTwo";
import Home from '../screens/Home';
import Perfil from "../screens/Perfil";
import Questoes from '../screens/Questoes';
import Audios from '../screens/Audios';
import Banca from '../screens/Banca';
import Videos from '../screens/Videos';
import Artigos from '../screens/Artigos';
import Loja from '../screens/Loja';

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroOne" component={CadastroOne} />
      <Stack.Screen name="CadastroTwo" component={CadastroTwo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Banca" component={Banca} />
      <Stack.Screen name="Questoes" component={Questoes} />
      <Stack.Screen name="Audios" component={Audios} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Artigos" component={Artigos} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Loja" component={Loja} />
    </Stack.Navigator>
  );
}
