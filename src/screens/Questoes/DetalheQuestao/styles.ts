import { StyleSheet } from "react-native";
import theme from "../../../assets/themes/THEMES";

export const styles = StyleSheet.create({
  utilsHeader: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  headerQuestão: {
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  container: {
    padding: 15,
    gap: 10,
  },
  questionContainer: {},
  questionText: {
    fontSize: 16,
    color: theme.colors.text,
  },
  alternativasContainer: {
    paddingVertical: 30,
  },
  alternativaText: {
    fontSize: 16,
    color: theme.colors.text,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  alternativaTouchable: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  alternativaCorreta: {
    backgroundColor: "#B6F2C8",
  },
  alternativaErrada: {
    backgroundColor: "#FFD6D6",
  },
  alternativaLetraCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  alternativaLetraText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  alternativaSelecionadaText: {
    color: theme.colors.primary,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 30,
    gap: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: "bold",
    },
});
