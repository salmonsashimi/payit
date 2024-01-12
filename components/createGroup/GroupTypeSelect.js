import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

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
    border: `1px solid ${COLOURS.green2}`,
    borderRadius: 7,
    padding: SIZES.extraSmall,
  },
});

export const GroupTypeSelect = (props) => {
  return (
    <View>
      <Text style={styles.inputLabel}>Group type</Text>
      <FlatList
        style={styles.list}
        horizontal
        contentContainerStyle={{
          columnGap: SIZES.small,
        }}
        data={["Family", "Friends", "Couple", "Others"]}
        renderItem={({ item }) => (
          <Pressable style={styles.typeButton}>{item}</Pressable>
        )}
      />
    </View>
  );
};
