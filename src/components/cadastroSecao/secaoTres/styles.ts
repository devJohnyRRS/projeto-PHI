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
    backgroundColor: theme.colors.background,
  },
  scrollContainer: {
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textHeaderOne: {
    fontSize: 28,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    textAlign: "center",
  },
  textHeaderTwo: {
    fontSize: 28,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    textAlign: "center",
  },
  footerContainer: {
    gap: 19,
    alignItems: "center",
  },
  choosableContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginVertical: 60,
  },
  columnChoosableContainer: {
    flex: 1,
    gap: 16,
  },
  choosableItem: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  choosableItemSelected: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  choosableText: {
    fontSize: 16,
    fontFamily: theme.fonts.light,
    color: theme.colors.text,
  },
  pularButton: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
});
