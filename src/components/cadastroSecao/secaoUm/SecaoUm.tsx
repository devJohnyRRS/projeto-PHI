import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const favIcon = require("../../../../assets/favicon.png");

export default function SecaoUm() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={favIcon} style={styles.favIcon} />
        <View style={styles.headerContainer}>
          <Text style={styles.textHeaderOne}>Qual a sua data de </Text>
          <Text style={styles.textHeaderTwo}>nascimento?</Text>
        </View>
      </View>
    </ScrollView>
  );
}
