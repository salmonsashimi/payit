import { SafeAreaView, View } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { COLOURS, FONT_SIZE } from "@app/constants";
import { ArrowBack } from "@components/header/ArrowBack";
import { GroupInfo } from "@components/groupInfo/GroupInfo";
import {DoneButton} from "@components/header/DoneButton";
import {AddExpense} from "@components/addExpense/AddExpense";
export default () => {
    const router = useRouter();

    return      (<SafeAreaView style={{ flex: 1, backgroundColor: COLOURS.backgroundColor }}>
    <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: COLOURS.green4,
        },
        headerShadowVisible: false,
        headerTitle: "Add expense",
        headerTitleStyle: {
          color: COLOURS.white2,
          fontSize: FONT_SIZE.large,
        },
        headerLeft: () => <ArrowBack />,
        headerRight: () => <DoneButton/>
      }}
    />
    <AddExpense/>

  </SafeAreaView>)
}

