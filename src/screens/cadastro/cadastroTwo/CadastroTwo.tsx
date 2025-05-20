import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import SecaoUm from "../../../components/cadastroSecao/secaoUm/SecaoUm";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
// import SecaoDois from "...";
// import SecaoTres from "...";

export default function CadastroTwo() {
  const [step, setStep] = useState(1);

  function renderSection() {
    switch (step) {
      case 1:
        return <SecaoUm />;
      // case 2: return <SecaoDois />;
      // case 3: return <SecaoTres />;
      default:
        return <SecaoUm />;
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
