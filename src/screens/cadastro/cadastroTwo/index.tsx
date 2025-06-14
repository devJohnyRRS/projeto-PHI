import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import SecaoUm from "../../../components/cadastroSecao/secaoUm/SecaoUm";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import SecaoDois from "../../../components/cadastroSecao/secaoDois/SecaoDois";
import SecaoTres from "../../../components/cadastroSecao/secaoTres/SecaoTres";
import { useTypedNavigation } from "../../../hooks/useNavigate";
// import SecaoDois from "...";
// import SecaoTres from "...";

export default function CadastroTwo() {
  const navigation = useTypedNavigation();
  const [step, setStep] = useState(1);

  function handleAvancarDataAniversario(
    tipo: "proxima" | "pular",
    data?: { dia: number; mes: number; ano: number }
  ) {
    setStep((prev) => prev + 1);
  }

  function handleAvancarEscolaridade(
    tipo: "proxima" | "pular",
    escolaridade?:
      | "Ensino Fundamental"
      | "Ensino Médio"
      | "Ensino Superior"
      | "Pós-Graduação"
  ) {
    setStep((prev) => prev + 1);
  }

  function handleAvancarMateriaFavorita(
    tipo: "proxima" | "pular",
    escolaridade?:
      | "História"
      | "Português"
      | "Matemática"
      | "Física"
      | "Inglês"
      | "Biologia"
      | "Geografia"
      | "Química"
      | "Artes"
      | "Filosofia"
  ) {
    navigation.navigate("Home");
  }

  function renderSection() {
    switch (step) {
      case 1:
        return <SecaoUm onAvancar={handleAvancarDataAniversario} />;
      case 2:
        return <SecaoDois onAvancar={handleAvancarEscolaridade} />;
      case 3:
        return <SecaoTres onAvancar={handleAvancarMateriaFavorita} />;
      default:
        return <SecaoUm onAvancar={handleAvancarDataAniversario} />;
    }
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {renderSection()}
        <View style={styles.dotsContainer}>
          {[1, 2, 3].map((item) => (
            <View
              key={item}
              style={[styles.dot, step === item && styles.dotActive]}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
