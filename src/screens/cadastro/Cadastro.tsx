import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import CustomImput from "../../components/customInput/CustomInput";
import theme from "../../assets/themes/THEMES";
import { ddds } from "../../utils/dddList";
import DropDownPicker from "react-native-dropdown-picker";

const favIcon = require("../../../assets/favicon.png");

export default function Cadastro() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    ddds.map((ddd) => ({ label: ddd, value: ddd }))
  );
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroNome, setErroNome] = useState(false);
  const [erroSobrenome, setErroSobrenome] = useState(false);
  const [erroNumero, setErroNumero] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={favIcon} style={styles.favIcon} />
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Não tem uma conta?{"\n"}Crie aqui!</Text>
            <Text>É rápido e fácil.</Text>
          </View>
          <View style={styles.forms}>
            <View style={styles.nameLastname}>
              <CustomImput
                placeholder="Nome"
                placeholderTextColor={theme.colors.text}
                value={nome}
                onChangeText={setNome}
                error={erroNome}
                errorMessage="Preencha o nome"
              />
              <CustomImput
                placeholder="Sobrenome"
                placeholderTextColor={theme.colors.text}
                value={sobrenome}
                onChangeText={setSobrenome}
                error={erroSobrenome}
                errorMessage="Preencha o sobrenome"
              />
            </View>
            <CustomImput
              placeholder="Email"
              placeholderTextColor={theme.colors.text}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={erroEmail}
              errorMessage="Preencha o email"
            />
            <View style={styles.numberContainer}>
              <View style={styles.dddContainer}>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="DDD"
                  listMode="MODAL"
                />
              </View>
              <CustomImput
                placeholder="Número"
                placeholderTextColor={theme.colors.text}
                value={numeroTelefonico}
                onChangeText={setNumeroTelefonico}
                keyboardType="phone-pad"
                error={erroNumero}
                errorMessage="Preencha o número"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
