import { View, TextInput, StyleSheet } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

const styles = StyleSheet.create({
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

export const StyledTextInput = (props) => {
  const { value, onTextChange } = props;
  return (
    <View>
      <TextInput
        style={styles.textInput}
        autoFocus
        value={value}
        onChange={onTextChange}
      />
      <View style={styles.textInputLine} />
    </View>
  );
};
