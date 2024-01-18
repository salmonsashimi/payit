import { Pressable, SafeAreaView, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { FloatingButton } from "../common/_FloatingButton";

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: COLOURS.backgroundColor },
  container: {
    flex: 1,
    padding: SIZES.extraLarge,
  },
});

export const GroupInfo = ({ id }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* // add expense */}
        {/*  expense list*/}
        {/*  actions*/}
        <FloatingButton text={"Add expense"} route={`/add-expense/${id}`} />
      </View>
    </View>
  );
};
