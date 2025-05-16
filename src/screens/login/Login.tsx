// src/screens/login/Login.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../assets/themes/THEMES';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={theme.colors.text}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor={theme.colors.text}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: theme.fonts.medium
  }
});
