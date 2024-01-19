import { View, Text, StyleSheet } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { SquareActiveButton } from "@components/common/_SquareActiveButton";
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: FONT_SIZE.medium,
  },
});

export const ExpenseBy = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Paid by </Text>
      <SquareActiveButton buttonText={"you"} onButtonPress={() => {}} />
      <Text style={styles.text}> and split </Text>
      <SquareActiveButton buttonText={"equally"} onButtonPress={() => {}} />
    </View>
  );
};
