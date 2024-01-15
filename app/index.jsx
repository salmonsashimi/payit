import { View, ScrollView, SafeAreaView, Pressable, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE } from "./constants";
import Dashboard from "@components/dashboard/Dashboard";
import { FloatingButton } from "@components/common/FloatingButton";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.backgroundColor }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLOURS.green4,
          },
          headerShadowVisible: false,
          headerTitle: "PayIt!",
          headerTitleStyle: {
            color: COLOURS.white2,
            fontSize: FONT_SIZE.large,
          },
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Dashboard />
      </ScrollView>
      <FloatingButton text={"Create group"} route={"/createGroup"} />
    </SafeAreaView>
  );
};
export default Home;
