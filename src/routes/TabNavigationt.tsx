import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesList } from "../types/TabNavigationList";

const Tab = createBottomTabNavigator<RoutesList, 'TabNavigation'>();

export default function AppRoutes() {
  return (
    <>
    // <Tab.Navigator id="TabNavigation" screenOptions={{ headerShown: false }}>
    //   {/* <Tab.Screen name="Home" component={Home} /> */}
    //   {/* <Tab.Screen name="Profile" component={Profile} /> */}
    //   {/* Adicione outras abas aqui */}
    // </Tab.Navigator>
    </>
  );
}