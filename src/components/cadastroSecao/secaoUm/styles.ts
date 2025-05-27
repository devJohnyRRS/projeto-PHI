import { StyleSheet } from "react-native";
import theme from "../../../assets/themes/THEMES";

export const styles = StyleSheet.create({
  favIcon: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 12,
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
    marginBottom: 40,
    gap: 8,
  },
  textHeaderOne: {
    fontSize: 22,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    textAlign: "center",
  },
  textHeaderTwo: {
    fontSize: 22,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    textAlign: "center",
  },
  pickerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 12,
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 50,
    minWidth: "160%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  pickerCol: {
    flex: 1,
    alignItems: "center",
  },
  pickerLabel: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: theme.fonts.medium,
    marginBottom: 8,
  },
  pickerScroll: {
    maxHeight: 120,
    borderRadius: 8,
    backgroundColor: "transparent",
    width: "100%",
  },
  pickerContent: {
    alignItems: "center",
    paddingVertical: 4,
  },
  pickerItem: {
    fontSize: 16,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    paddingVertical: 6,
    paddingHorizontal: 8,
    textAlign: "center",
    borderRadius: 6,
    marginVertical: 2,
    minWidth: 60,
  },
  pickerItemSelected: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    backgroundColor: theme.colors.lightBlue,
  },
});
