import { StyleSheet } from "react-native";
import theme from "../../assets/themes/THEMES";

export const styles = StyleSheet.create({
  favIcon: {
    width: 50,
    height: 50,
  },
  peopleIconContainer: {
    width: 200,
    height: 150,
    alignSelf: "center",
    marginBottom: 30,
  },
  splashIconContainer: {
    width: 250,
    height: 110,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    padding: 31,
  },
  scrollContainer: {
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
    textAlign: "center",
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 20,
  },
  forms: {
    gap: 27,
  },
  cadastroButton: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
  eye: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 83,
    right: 10,
    zIndex: 1,
  },
});
