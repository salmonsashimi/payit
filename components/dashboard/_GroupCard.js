import { View, Text, StyleSheet, Pressable } from "react-native";
import { FONT_SIZE, COLOURS } from "../../app/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 3,
    backgroundColor: COLOURS.green1,
    color: COLOURS.white,
    height: 50,
  },
  headerText: {
    color: "black",
    fontSize: FONT_SIZE.large,
  },
  contentText: {
    color: "black",
    fontSize: FONT_SIZE.medium,
  },
});

export const GroupCard = (props) => {
  return (
    <Pressable style={styles.container} onPress={() => {}}>
      <Text style={styles.headerText}>{props.group}</Text>
      <Text style={styles.text}>${props.balance}</Text>
    </Pressable>
  );
};
