import { View, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyledTextInput } from "@components/common/_StyledTextInput";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { Feather } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    padding: SIZES.extraLarge,
  },
  wrapper: {
    flexDirection: "row",
    padding: SIZES.large,
    flexGrow: 1,
    gap: SIZES.large,
  },
  button: {
    border: `1px solid black`,
    borderRadius: SIZES.extraSmall,
    width: "35px",
    height: "35px",
    alignItems: "cetner",
  },
});

export const ExpenseInput = (props) => {
  const { description, setDescription, amount, setAmount } = props;
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Pressable style={styles.button}>
          <Ionicons name="list-sharp" size={25} color="black" />{" "}
        </Pressable>
        <StyledTextInput
          value={description}
          onTextChange={onDescriptionChange}
        />
      </View>
      <View style={styles.wrapper}>
        <Pressable style={styles.button}>
          <Feather name="dollar-sign" size={24} color="black" />
        </Pressable>
        <StyledTextInput value={amount} onTextChange={setAmount} />
      </View>
    </View>
  );
};
