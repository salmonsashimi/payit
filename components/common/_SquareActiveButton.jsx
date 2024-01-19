import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

const commonButtonStyles = {
  borderRadius: 7,
  padding: SIZES.extraSmall,
  paddingLeft: SIZES.large,
  paddingRight: SIZES.large,
};
const styles = StyleSheet.create({
  inputLabel: {
    marginBottom: SIZES.extraSmall,
    fontSize: FONT_SIZE.small,
  },
  list: {
    flex: 1,
    flexDirection: "row",
  },
  typeButton: {
    ...commonButtonStyles,
    border: `1.5px solid ${COLOURS.green2}`,
  },
  activeTypeButton: {
    ...commonButtonStyles,
    border: `1.5px solid ${COLOURS.green2}`,
    backgroundColor: COLOURS.green2,
  },
  activeTypeText: {
    color: COLOURS.white2,
  },
});

export const SquareActiveButton = (props) => {
  const { active, buttonText, onButtonPress } = props;
  return (
    <Pressable
      value={active}
      onPress={onButtonPress}
      style={
        buttonText === active ? styles.activeTypeButton : styles.typeButton
      }
    >
      <Text style={buttonText === active && styles.activeTypeText}>
        {buttonText}
      </Text>
    </Pressable>
  );
};
