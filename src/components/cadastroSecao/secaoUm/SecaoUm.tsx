import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { styles } from "./styles";
import CustomButton from "../../customButton/CustomButton";

const favIcon = require("../../../../assets/favicon.png");

interface SecaoUmProps {
  onAvancar: (
    tipo: "proxima" | "pular",
    data?: { dia: number; mes: number; ano: number }
  ) => void;
}

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const anoAtual = new Date().getFullYear();
const anos = Array.from({ length: 100 }, (_, i) => anoAtual - i);

// Função para calcular dias do mês
function getDiasNoMes(mes: number, ano: number) {
  return new Date(ano, mes + 1, 0).getDate();
}

export default function SecaoUm({ onAvancar }: SecaoUmProps) {
  const [dia, setDia] = useState(1);
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(anoAtual);

  // Atualiza os dias disponíveis conforme mês/ano
  const dias = useMemo(() => {
    const total = getDiasNoMes(mes, ano);
    return Array.from({ length: total }, (_, i) => i + 1);
  }, [mes, ano]);

  // Se o dia selecionado for maior que o máximo, ajusta automaticamente
  useEffect(() => {
    const maxDia = getDiasNoMes(mes, ano);
    if (dia > maxDia) setDia(maxDia);
  }, [mes, ano]);

  const handlePular = () => {
    onAvancar("pular");
  };

  const handleArmazenarData = () => {
    onAvancar("proxima", { dia, mes: mes + 1, ano });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={favIcon} style={styles.favIcon} />
        <View style={styles.headerContainer}>
          <Text style={styles.textHeaderOne}>Qual a sua data de </Text>
          <Text style={styles.textHeaderTwo}>nascimento?</Text>
        </View>
        <View style={styles.pickerRow}>
          <View style={styles.pickerCol}>
            <Text style={styles.pickerLabel}>Dia</Text>
            <ScrollView
              style={styles.pickerScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.pickerContent}
            >
              {dias.map((d) => (
                <Text
                  key={d}
                  style={[
                    styles.pickerItem,
                    dia === d && styles.pickerItemSelected,
                  ]}
                  onPress={() => setDia(d)}
                >
                  {d}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={styles.pickerCol}>
            <Text style={styles.pickerLabel}>Mês</Text>
            <ScrollView
              style={styles.pickerScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.pickerContent}
            >
              {meses.map((m, i) => (
                <Text
                  key={m}
                  style={[
                    styles.pickerItem,
                    mes === i && styles.pickerItemSelected,
                  ]}
                  onPress={() => setMes(i)}
                >
                  {m}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={styles.pickerCol}>
            <Text style={styles.pickerLabel}>Ano</Text>
            <ScrollView
              style={styles.pickerScroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.pickerContent}
            >
              {anos.map((a) => (
                <Text
                  key={a}
                  style={[
                    styles.pickerItem,
                    ano === a && styles.pickerItemSelected,
                  ]}
                  onPress={() => setAno(a)}
                >
                  {a}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <CustomButton
            title="Próxima"
            onPress={handleArmazenarData}
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
