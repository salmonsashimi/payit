import { Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLOURS, FONT_SIZE } from "@app/constants";
import { SIZES } from "../../app/constants";

export const DoneButton = (props) => {
  const { onBackPress } = props;
  const styles = {
    button: { padding: SIZES.medium },
  };
  return (
    <Pressable onPress={onBackPress} style={styles.button}>
<Ionicons name="checkmark-sharp" size={25} color="white" />    
</Pressable>
  );
};
