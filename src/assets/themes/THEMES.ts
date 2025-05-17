// assets/themes/THEMES.ts

// 1) Definição das cores do projeto
export const colors = {
  primary: "#915eb9",
  secondary: "#c2a9d6",
  background: "#f4f6ff",
  text: "#222222",
  textLight: "#ffffff",
  gray: "#a6a6a6",
  lightGray: "#dddddd",
  blue: "#4d88d1",
  lightBlue: "#c0d5ef",
  danger: "#bd0000",
  bronze: "#eda75e",
  gold: "#ffd400",
};

export const fonts = {
  regular: "Poppins_400Regular",
  light: "Poppins_300Light",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
};

const theme = {
  colors,
  fonts,
};

export type Theme = typeof theme;
export default theme;
