import { useState } from "react";
import { View, FlatList, Text, StyleSheet, Pressable } from "react-native";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { SquareActiveButton } from "@components/common/_SquareActiveButton";

const styles = StyleSheet.create({
  inputLabel: {
    marginBottom: SIZES.extraSmall,
    fontSize: FONT_SIZE.small,
  },
  list: {
    flex: 1,
    flexDirection: "row",
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
          <SquareActiveButton
            active={groupType}
            onButtonPress={() => setGroupType(item)}
            buttonText={item}
          />
        )}
      />
    </View>
  );
};
