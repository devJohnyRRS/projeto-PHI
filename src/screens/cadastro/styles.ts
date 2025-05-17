import { StyleSheet } from "react-native";
import theme from "../../assets/themes/THEMES";

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
    marginTop: 30,
    marginBottom: 54,
    gap: 28,
  },
  title: {
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: theme.fonts.semiBold,
    textAlign: "left",
  },
  forms: {
    gap: 20,
    justifyContent: "center",
  },
  nameLastname: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  dddContainer: {
    width: 100,
    height: 48,
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
