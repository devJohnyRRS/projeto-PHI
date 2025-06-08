import { StyleSheet } from "react-native";
import theme from "../../assets/themes/THEMES";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 42,
    borderColor: theme.colors.background,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 2,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    backgroundColor: theme.colors.white,
  },
  errorText: {
    color: theme.colors.danger,
    fontSize: 12,
    marginLeft: 4,
    fontFamily: theme.fonts.regular,
  },
  eye: {
    position: "absolute",
    right: 10,
    top: 7,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});
