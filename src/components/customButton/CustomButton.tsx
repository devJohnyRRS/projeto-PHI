import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

interface CustomButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  children?: React.ReactNode;
}

export default function CustomButton({
  title,
  onPress,
  disabled,
  style,
  children,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonContainer, style]}
    >
      {children ? (
        children
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
