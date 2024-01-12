import { useState } from "react";
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
    border: `1px solid ${COLOURS.green2}`,
  },
  activeTypeButton: {
    ...commonButtonStyles,
    border: `1px solid ${COLOURS.green2}`,
    backgroundColor: COLOURS.green2,
  },
  activeTypeText: {
    color: COLOURS.white2,
  },
});

export const GroupTypeSelect = (props) => {
  const [groupType, setGroupType] = useState("");

  return (
    <View>
      <Text style={styles.inputLabel}>Group type</Text>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          columnGap: SIZES.small,
        }}
        data={["Family", "Friends", "Couple", "Others"]}
        renderItem={({ item }) => (
          <Pressable
            value={groupType}
            onPress={() => setGroupType(item)}
            style={
              item === groupType ? styles.activeTypeButton : styles.typeButton
            }
          >
            <Text style={item === groupType && styles.activeTypeText}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
