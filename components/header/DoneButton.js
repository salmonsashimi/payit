import { Pressable } from "react-native";

export const DoneButton = (props) => {
  const { onBackPress } = props;
  return (
    <Pressable onPress={onBackPress} style={{ padding: 10, color: "white" }}>
      DONE
    </Pressable>
  );
};
