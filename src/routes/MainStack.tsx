import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/Login';
import { MainStackParamList } from "../types/MainStackList";
import CadastroOne from '../screens/cadastro/CadastroOne';
import CadastroTwo from '../screens/cadastro/CadastroTwo';
import AppTabs from "./TabNavigationt";
import Artigos from "../screens/Artigos";
import Audios from "../screens/Audios";
import Questoes from "../screens/Questoes";
import Videos from "../screens/Videos";
import PapeisDeParede from '../screens/PapeisDeParede';
import Icones from '../screens/Icones';
import Molduras from '../screens/Molduras';
import Assinar from '../screens/Assinar';

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroOne" component={CadastroOne} />
      <Stack.Screen name="CadastroTwo" component={CadastroTwo} />
      <Stack.Screen name="Home" component={AppTabs} />
      <Stack.Screen name="Questoes" component={Questoes} />
      <Stack.Screen name="Audios" component={Audios} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Artigos" component={Artigos} />
      <Stack.Screen name="PapeisDeParede" component={PapeisDeParede} />
      <Stack.Screen name="Icones" component={Icones} />
      <Stack.Screen name="Molduras" component={Molduras} />
      <Stack.Screen name="Assinar" component={Assinar} />
    </Stack.Navigator>
  );
}
