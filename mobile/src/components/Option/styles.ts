import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 112,
    padding: 0,
    marginHorizontal: 8,

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    marginTop: 8,

    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});
