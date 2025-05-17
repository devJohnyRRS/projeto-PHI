// src/screens/login/Login.tsx
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import theme from "../../assets/themes/THEMES";
import CustomButton from "../../components/customButton/CustomButton";
import { styles } from "./styles";
import CustomImput from "../../components/customInput/CustomImput";
import { CheckSquare, Square } from "phosphor-react-native";
import { useTypedNavigation } from "../../hooks/useNavigate";

const favIcon = require("../../../assets/favicon.png");
const spashIcon = require("../../../assets/splash-icon.png");
const peopleIcon = require("../../../assets/people.png");
export default function Login() {
  const navigation = useTypedNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleLogin() {
    let erro = false;
    if (!email) {
      setErroEmail(true);
      erro = true;
    } else {
      setErroEmail(false);
    }
    if (!senha) {
      setErroSenha(true);
      erro = true;
    } else {
      setErroSenha(false);
    }
    if (!erro) {
      // lógica de login
      console.log("Login efetuado!");
    }
  }

  const handleToCadastro = () => {
    navigation.navigate("Cadastro");
  };
  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={favIcon} style={styles.favIcon} />
          <View style={styles.splashIconContainer}>
            <Image
              source={spashIcon}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </View>
          <Text style={styles.title}>
            Venha estudar de maneira fácil e divertida.
          </Text>
          <View style={styles.peopleIconContainer}>
            <Image
              source={peopleIcon}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </View>
          <View style={styles.forms}>
            <CustomImput
              placeholder="Email"
              placeholderTextColor={theme.colors.text}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={erroEmail}
              errorMessage="Preencha o email"
            />
            <CustomImput
              placeholder="Senha"
              placeholderTextColor={theme.colors.text}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              error={erroSenha}
              errorMessage="Preencha a senha"
            />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 13,
              marginLeft: 20,
            }}
          >
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              {rememberMe ? (
                <CheckSquare
                  size={20}
                  style={{ position: "absolute", left: -23 }}
                />
              ) : (
                <Square size={20} style={{ position: "absolute", left: -23 }} />
              )}
              <Text>Lembrar de mim</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonContainer}>
            <CustomButton title="Entrar" onPress={handleLogin} />
            <TouchableOpacity onPress={handleToCadastro}>
              <Text style={styles.cadastroButton}>
                Não tem uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
