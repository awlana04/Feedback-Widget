import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,

    alignItems: "center",
  },
  header: {
    marginVertical: 16,

    flexDirection: "row",
  },
  titleContainer: {
    paddingRight: 24,

    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  titleText: {
    color: theme.colors.text_primary,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    height: 112,
    marginBottom: 8,
    padding: 12,

    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 4,

    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  footer: {
    marginBottom: 16,

    flexDirection: "row",
  },
});
