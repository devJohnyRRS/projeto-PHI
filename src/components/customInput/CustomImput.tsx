import React, { useState } from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";
import { styles } from "./styles";
import theme from "../../assets/themes/THEMES";

interface CustomInputProps extends TextInputProps {
  error?: boolean;
  errorMessage?: string;
}

export default function CustomImput({
  error = false,
  errorMessage = "",
  value,
  ...rest
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const inputFontFamily =
    typeof value === "string" && value.length === 0
      ? theme.fonts.light
      : theme.fonts.regular;

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={[
          styles.input,
          { fontFamily: inputFontFamily },
          error && { borderColor: "red" },
          isFocused && { borderColor: theme.colors.primary, borderWidth: 1.5 },
        ]}
        placeholderTextColor={theme.colors.lightGray}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {error && !!errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
}
