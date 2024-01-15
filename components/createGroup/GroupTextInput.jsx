import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: FONT_SIZE.small,
  },
  textInput: {
    marginTop: SIZES.small,
    border: "none",
    fontSize: FONT_SIZE.medium,
    outlineStyle: "none",
  },
  textInputLine: {
    height: "2px",
    width: "100%",
    backgroundColor: COLOURS.green2,
  },
});

export const GroupTextInput = (props) => {
  const { groupName, setGroupName } = props;
  return (
    <View>
      <Text style={styles.inputLabel}>Group name</Text>
      <TextInput
        style={styles.textInput}
        autoFocus
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <View style={styles.textInputLine} />
    </View>
  );
};
