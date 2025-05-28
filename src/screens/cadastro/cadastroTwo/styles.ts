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
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    gap: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.gray,
  },
  dotActive: {
    backgroundColor: theme.colors.primary,
  },
});
