import { View, Text, StyleSheet, Pressable } from "react-native";
import { FONT_SIZE, COLOURS, SIZES } from "@app/constants";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.large,
    marginTop: SIZES.extraSmall,
    backgroundColor: COLOURS.green1,
    color: COLOURS.white,
    height: 50,
  },
  headerText: {
    color: "black",
    fontSize: FONT_SIZE.large,
  },
  contentText: {
    color: "black",
    fontSize: FONT_SIZE.medium,
  },
});

export const GroupCard = ({ groupData }) => {
  const { name, balance } = groupData;

  const router = useRouter();

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/group-details/${groupData.id}`)}
    >
      <Text style={styles.headerText}>{name}</Text>

      <Text style={styles.text}>{balance ? `$${balance}` : "Settled up"}</Text>
    </Pressable>
  );
};
