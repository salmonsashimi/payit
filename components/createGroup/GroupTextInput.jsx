import { View, Text, StyleSheet } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { StyledTextInput } from "../common/_StyledTextInput";

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: FONT_SIZE.small,
  },
});

export const GroupTextInput = (props) => {
  const { groupName, setGroupName } = props;
  const onTextChange = (e) => {
    setGroupName(e.target.value);
  };
  return (
    <View>
      <Text style={styles.inputLabel}>Group name</Text>
      <StyledTextInput value={groupName} onTextChange={onTextChange} />
    </View>
  );
};
