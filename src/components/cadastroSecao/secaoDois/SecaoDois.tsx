import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import CustomButton from "../../customButton/CustomButton";
import { styles } from "./styles";

const favIcon = require("../../../../assets/favicon.png");

interface SecaoDoisProps {
  onAvancar: (
    tipo: "proxima" | "pular",
    escolaridade?:
      | "Ensino Fundamental"
      | "Ensino Médio"
      | "Ensino Superior"
      | "Pós-Graduação"
  ) => void;
}

const opcoes = [
  "Ensino Fundamental",
  "Ensino Médio",
  "Ensino Superior",
  "Pós-Graduação",
] as const;

export default function SecaoDois({ onAvancar }: SecaoDoisProps) {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  const handlePular = () => {
    onAvancar("pular");
  };

  const handleSelecionar = (opcao: string) => {
    setSelecionado(opcao);
  };

  const handleProxima = () => {
    if (selecionado) {
      onAvancar("proxima", selecionado as any);
    }
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={favIcon} style={styles.favIcon} />
        <View style={styles.headerContainer}>
          <Text style={styles.textHeaderOne}>Qual seu nível de </Text>
          <Text style={styles.textHeaderTwo}>escolaridade?</Text>
        </View>
        <View style={styles.choosableContainer}>
          {opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={[
                styles.choosableItem,
                selecionado === opcao && styles.choosableItemSelected,
              ]}
              onPress={() => handleSelecionar(opcao)}
            >
              <Text style={styles.choosableText}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.footerContainer}>
          <CustomButton
            title="Próxima"
            onPress={handleProxima}
            style={{ width: 200 }}
          />
          <TouchableOpacity onPress={handlePular}>
            <Text style={styles.pularButton}>Pular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
