import { View, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE } from "./constants";
import Dashboard from "PayIt/components/dashboard/Dashboard";
import { floatingButtonStyles } from "./styles";

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
      <Pressable
        style={floatingButtonStyles}
        onPress={() => router.push("/createGroup")}
      >
        Create group
      </Pressable>
    </SafeAreaView>
  );
};
export default Home;
