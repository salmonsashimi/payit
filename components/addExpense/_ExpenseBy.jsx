import { View, Text, StyleSheet } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: FONT_SIZE.medium,
  },
});

export const ExpenseBy = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Paid by </Text>
      /// EXTRACT GROUP BUTTON
      <Text style={styles.text}>and split</Text>
    </View>
  );
};
