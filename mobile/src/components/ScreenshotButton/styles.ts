import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    marginRight: 8,

    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,

    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  image: {
    width: 40,
    height: 40,
  },
});
