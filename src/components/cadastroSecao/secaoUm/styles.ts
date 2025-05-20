import { StyleSheet } from "react-native";
import theme from "../../../assets/themes/THEMES";

export const styles = StyleSheet.create({
  favIcon: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    padding: 31,
  },
  scrollContainer: {
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  textHeaderOne: {
    fontSize: 28,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
  },
  textHeaderTwo: {
    fontSize: 28,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
  },
});
