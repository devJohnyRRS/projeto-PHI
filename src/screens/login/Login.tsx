import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../components/customButton/CustomButton";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.mainContainer}>
      <Text>Login</Text>
      <CustomButton title="Entrar" onPress={() => console.log("Botão Clicado")} />
    </View>
  );
}
