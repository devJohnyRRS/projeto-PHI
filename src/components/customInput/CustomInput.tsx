import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import theme from "../../assets/themes/THEMES";
import { Eye, EyeSlash } from "phosphor-react-native";

interface CustomInputProps extends TextInputProps {
  error?: boolean;
  errorMessage?: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export default function CustomImput({
  error = false,
  errorMessage = "",
  value,
  showPasswordToggle = false,
  showPassword,
  onTogglePassword,
  ...rest
}: CustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const inputFontFamily =
    typeof value === "string" && value.length === 0
      ? theme.fonts.light
      : theme.fonts.regular;

  return (
    <View style={styles.container}>
      <View style={{ position: "relative", justifyContent: "center" }}>
        <TextInput
          style={[
            styles.input,
            { fontFamily: inputFontFamily },
            error && { borderColor: "red" },
            isFocused && {
              borderColor: theme.colors.primary,
              borderWidth: 1.5,
            },
            showPasswordToggle && { paddingRight: 40 }, // espaço para o olho
          ]}
          placeholderTextColor={theme.colors.lightGray}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            style={styles.eye}
            onPress={onTogglePassword}
            activeOpacity={0.7}
          >
            {showPassword ? (
              <EyeSlash size={22} color={theme.colors.text} />
            ) : (
              <Eye size={22} color={theme.colors.text} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && !!errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
}
