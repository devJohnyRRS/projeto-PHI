import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
}

export default function CustomButton({
  title,
  onPress,
  disabled,
  style,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonContainer, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
