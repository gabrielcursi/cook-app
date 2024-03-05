import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 62,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
  },
  recipes: {
    padding: 32,
  },
  recipesContent: {
    gap: 16,
  },
});
