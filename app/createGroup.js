import { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE, SIZES } from "./constants";
import { GroupTextInput } from "PayIt/components/createGroup/GroupTextInput";
import { GroupTypeSelect } from "PayIt/components/createGroup/GroupTypeSelect";

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: COLOURS.backgroundColor },
  container: {
    flex: 1,
    gap: 20,
    padding: SIZES.extraLarge,
  },
  inputLabel: {},
  textInput: {
    marginTop: SIZES.small,
    border: "none",
    fontSize: FONT_SIZE.medium,
    outlineStyle: "none",
  },
  textInputLine: {
    height: "2px",
    width: "100%",
    backgroundColor: COLOURS.green2,
  },
  doneButton: {},
});
const createGroup = () => {
  const [groupName, setGroupName] = useState("");
  const router = useRouter();

  const onCreateGroupClick = () => {};
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLOURS.green4,
          },
          headerShadowVisible: false,
          headerTitle: "Create new group",
          headerTitleStyle: {
            color: COLOURS.white2,
            fontSize: FONT_SIZE.large,
          },
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")}>{`<`}</Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={onCreateGroupClick}>Done</Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <GroupTextInput groupName={groupName} setGroupName={setGroupName} />
        <GroupTypeSelect />
      </View>
    </SafeAreaView>
  );
};

export default createGroup;
