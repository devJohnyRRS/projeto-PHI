import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import { MainStackParamList } from "../types/MainStackList";
import CadastroOne from "../screens/cadastro/cadastroOne/CadastroOne";
import CadastroTwo from "../screens/cadastro/cadastroTwo/CadastroTwo";
import Home from "../screens/home";
import Perfil from "../screens/Perfil";
import Chat from "../screens/chat/Chat";
import ChatPrivado from "../screens/chat/ChatPrivado";

const Stack = createStackNavigator<MainStackParamList, "MainStack">();

export default function AppNavigator() {
  return (
    <Stack.Navigator id="MainStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroOne" component={CadastroOne} />
      <Stack.Screen name="CadastroTwo" component={CadastroTwo} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatPrivado" component={ChatPrivado} />
    </Stack.Navigator>
  );
}
