import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    marginBottom: 24,

    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  button: {
    height: 40,
    marginBottom: 56,
    paddingHorizontal: 24,

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: theme.colors.text_primary,
    fontSize: 16,
    fontFamily: theme.fonts.medium,
  },
});
