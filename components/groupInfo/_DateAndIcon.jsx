import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES, COLOURS } from "@app/constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateWrapper: {
    flex: 1,
    padding: SIZES.medium,
  },
  dateText: {
    textAlign: "center",
  },
  iconWrapper: {
    width: "50px",
    height: "50px",
    border: `2px solid ${COLOURS.green3}`,
    borderRadius: "7px",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const DateAndIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>Jan</Text>
        <Text style={styles.dateText}>12</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Ionicons name="list-sharp" size={25} color={COLOURS.green4} />
      </View>
    </View>
  );
};
