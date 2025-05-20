import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import CustomImput from "../../../components/customInput/CustomInput";
import theme from "../../../assets/themes/THEMES";
import { ddds } from "../../../utils/dddList";
import DropDownPicker from "react-native-dropdown-picker";
import { CheckSquare, Square } from "phosphor-react-native";
import CustomButton from "../../../components/customButton/CustomButton";
import { useTypedNavigation } from "../../../hooks/useNavigate";

const favIcon = require("../../../../assets/favicon.png");

export default function CadastroOne() {
  const navigation = useTypedNavigation();
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
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitarTermos, setAceitarTermos] = useState(false);
  const [erroNome, setErroNome] = useState(false);
  const [erroSobrenome, setErroSobrenome] = useState(false);
  const [erroNumero, setErroNumero] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState(false);
  const [erroDDD, setErroDDD] = useState(false);

  const handleCadastro = () => {
    let erro = false;

    if (!value) {
      setErroDDD(true);
      erro = true;
    } else {
      setErroDDD(false);
    }
    if (!nome) {
      setErroNome(true);
      erro = true;
    } else {
      setErroNome(false);
    }
    if (!sobrenome) {
      setErroSobrenome(true);
      erro = true;
    } else {
      setErroSobrenome(false);
    }
    if (!numeroTelefonico) {
      setErroNumero(true);
      erro = true;
    } else {
      setErroNumero(false);
    }
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
    if (!confirmarSenha) {
      setErroConfirmarSenha(true);
      erro = true;
    } else {
      setErroConfirmarSenha(false);
    }
    if (!aceitarTermos) {
      alert("Você deve aceitar os termos e condições");
      erro = true;
    }

    if (!erro) {
      navigation.navigate("CadastroTwo");
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

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
                  placeholder="DDI"
                  listMode="MODAL"
                />
                {erroDDD && (
                  <Text
                    style={{
                      color: theme.colors.danger,
                      fontSize: 12,
                      marginLeft: 4,
                      marginTop: 2,
                    }}
                  >
                    Selecione o DDD
                  </Text>
                )}
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
            <CustomImput
              placeholder="Criar Senha"
              placeholderTextColor={theme.colors.text}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              error={erroSenha}
              errorMessage="Preencha a senha"
            />
            <CustomImput
              placeholder="Confirme a Senha"
              placeholderTextColor={theme.colors.text}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              error={erroConfirmarSenha}
              errorMessage="Preencha o confirmar senha"
            />
          </View>
          <TouchableOpacity
            style={styles.termosContainer}
            onPress={() => setAceitarTermos(!aceitarTermos)}
          >
            {aceitarTermos ? <CheckSquare size={20} /> : <Square size={20} />}
            <Text style={styles.textTermosOne}>Eu concordo com os</Text>
            <Text style={styles.textTermosTwo}> Termos e condições</Text>
          </TouchableOpacity>
          <View style={styles.ButtonContainer}>
            <CustomButton title="Cadastrar" onPress={handleCadastro} />
            <TouchableOpacity onPress={handleGoBack}>
              <Text style={styles.backButtonText}>
                Já tem uma conta? Faça login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
