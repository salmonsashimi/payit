import { SafeAreaView, View } from "react-native";
import { Stack } from "expo-router";
import { COLOURS, FONT_SIZE } from "../constants";

const GroupDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.backgroundColor }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLOURS.green4,
          },
          headerShadowVisible: false,
          headerTitle: "Group name here",
          headerTitleStyle: {
            color: COLOURS.white2,
            fontSize: FONT_SIZE.large,
          },
        }}
      />
      <View></View>
    </SafeAreaView>
  );
};

export default GroupDetails;
