import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesList } from "../types/TabNavigationList";
import Banca from "../screens/Banca";
import Perfil from "../screens/Perfil";
import {
  CalendarBlank,
  Chat,
  ChatCircleText,
  House,
  Storefront,
  User,
} from "phosphor-react-native";
import theme from "../assets/themes/THEMES";
import Loja from '../screens/Loja';
import ChatScreen from '../screens/chat/Chat';
import Home from '../screens/home';

const Tab = createBottomTabNavigator<RoutesList, "TabNavigation">();

export default function AppTabs() {
  return (
    <>
      <Tab.Navigator
        id="TabNavigation"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.gray,
          tabBarStyle: {
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            height: 80,
          },
          tabBarIcon: ({ color, focused }) => {
            switch (route.name) {
              case "Home":
                return (
                  <House
                    color={color}
                    size={24}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Banca":
                return (
                  <CalendarBlank
                    color={color}
                    size={24}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Chat":
                return (
                  <ChatCircleText
                    color={color}
                    size={24}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Perfil":
                return (
                  <User
                    color={color}
                    size={24}
                    weight={focused ? "fill" : "regular"}
                  />
                );
              case "Loja":
                return (
                  <Storefront
                    color={color}
                    size={24}
                    weight={focused ? "fill" : "regular"}
                  />
                );
                return null;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Banca" component={Banca} />
        {/* Outras telas aqui, exemplo: */}
        {/* <Tab.Screen name="Chat" component={Chat} /> */}
        <Tab.Screen name="Loja" component={Loja} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </>
  );
}
