import { SafeAreaView, View } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { COLOURS, FONT_SIZE } from "@app/constants";
import { ArrowBack } from "@components/header/ArrowBack";
import { GroupInfo } from "@components/groupInfo/GroupInfo";
const GroupDetails = () => {
  const router = useRouter();
  const local = useLocalSearchParams();
  const {id} = local

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
          headerLeft: () => <ArrowBack />,
        }}
      />
      <GroupInfo id={id}/>
    </SafeAreaView>
  );
};

export default GroupDetails;
