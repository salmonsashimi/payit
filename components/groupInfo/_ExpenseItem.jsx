import { View, Text, StyleSheet } from "react-native";
import { COLOURS } from "@app/constants";
import { DateAndIcon } from "./_DateAndIcon";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.green1,
    height: "70px",
    flexDirection: "row",
  },
  leftInfo: {
    flexDirection: "row",
    flexDireciton: "row",
    flexBasis: "10%",
    alignItems: "center",
  },
  dateWrapper: {
    flex: 1,
  },
  dateText: {
    textAlign: "center",
  },
});
export const ExpenseItem = (props) => {
  const { expense } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftInfo}>
        <DateAndIcon />
      </View>
    </View>
  );
};
