import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE } from "./constants";
import Dashboard from "../components/dashboard/Dashboard";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "eee" }}>
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
    </SafeAreaView>
  );
};
export default Home;
