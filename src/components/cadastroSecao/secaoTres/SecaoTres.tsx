import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import CustomButton from "../../customButton/CustomButton";

const favIcon = require("../../../../assets/favicon.png");

interface SecaoTresProps {
  onAvancar: (
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
  ) => void;
}

const opcoes = [
  "História",
  "Português",
  "Matemática",
  "Física",
  "Inglês",
  "Biologia",
  "Geografia",
  "Química",
  "Artes",
  "Filosofia",
] as const;

export default function SecaoTres({ onAvancar }: SecaoTresProps) {
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

  // Divide as opções em duas colunas
  const metade = Math.ceil(opcoes.length / 2);
  const coluna1 = opcoes.slice(0, metade);
  const coluna2 = opcoes.slice(metade);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image source={favIcon} style={styles.favIcon} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeaderOne}>Qual a sua matéria </Text>
          <Text style={styles.textHeaderTwo}>favorita?</Text>
        </View>
        <View style={styles.choosableContainer}>
          <View style={styles.columnChoosableContainer}>
            {coluna1.map((opcao) => (
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
          <View style={styles.columnChoosableContainer}>
            {coluna2.map((opcao) => (
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
