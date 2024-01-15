import { Pressable, Text } from "react-native";
import { COLOURS, FONT_SIZE } from "@app/constants";
import { SIZES } from "../../app/constants";

export const DoneButton = (props) => {
  const { onBackPress } = props;
  const styles = {
    button: { padding: SIZES.medium, color: COLOURS.white2 },
    textStyles: {
      color: COLOURS.white2,
      fontSize: FONT_SIZE.medium,
      fontWeight: 600,
    },
  };
  return (
    <Pressable onPress={onBackPress} style={styles.button}>
      <Text style={styles.textStyles}>DONE</Text>
    </Pressable>
  );
};
