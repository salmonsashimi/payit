import { View, ScrollView, SafeAreaView, Pressable, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";

const styles = StyleSheet.create({
button: {
    backgroundColor: COLOURS.green4,
    color: COLOURS.white3,
    borderRadius: "30px",
    width: "180px",
    textAlign: "center",
    fontSize: FONT_SIZE.medium,
    padding: SIZES.medium,
    position: "absolute",
    right: 10,
    bottom: 30,
    },
    text: {
    flex: 1,
    textAlign: "center",
    color: COLOURS.white2,
    fontWeight: 500,
    }
})
  
export const FloatingButton = ({text, route}) => {
    const router = useRouter()
    return (
        <Pressable
        style={styles.button}
        onPress={() => router.push(route)}
      >
        <Text
          style={styles.text}
        >
          {text}
        </Text>
      </Pressable>
    )
}