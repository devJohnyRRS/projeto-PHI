import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../types/MainStackList";
import AppTabs from "./TabNavigationt";
import Artigos from "../screens/Artigos";
import Audios from "../screens/Audios";
import Questoes from "../screens/Questoes";
import Videos from "../screens/Videos";
import PapeisDeParede from "../screens/PapeisDeParede";
import Icones from "../screens/Icones";
import Molduras from "../screens/Molduras";
import Assinar from "../screens/Assinar";
import CadastroOne from "../screens/cadastro/cadastroOne";
import CadastroTwo from "../screens/cadastro/cadastroTwo";
import Login from "../screens/login";
import DetalheQuestao from "../screens/Questoes/DetalheQuestao";

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroOne" component={CadastroOne} />
      <Stack.Screen name="CadastroTwo" component={CadastroTwo} />
      <Stack.Screen name="Home" component={AppTabs} />
      <Stack.Screen name="Questoes" component={Questoes} />
      <Stack.Screen name="DetalheQuestao" component={DetalheQuestao} />
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
