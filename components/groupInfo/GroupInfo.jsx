import {
  Pressable,
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { FloatingButton } from "@components/common/_FloatingButton";
import { ExpenseItem } from "./_ExpenseItem";
import { NoExpenseMessage } from "./_NoExpenseMessage";
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOURS.backgroundColor,
  },
  headerContainer: {
    flex: 1,
    padding: SIZES.extraLarge,
  },
});

export const GroupInfo = ({ id }) => {
  const expenses = [
    {
      id: "1",
      name: "food",
      cost: 12.03,
      date: "12/12/2004",
      paidBy: ["me"],
      owedBy: ["person1"],
    },
  ];
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}></View>
      {/* // spend per moth */}
      {/*  expense list*/}
      {/*  actions */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {!!expenses.length ? (
          expenses.map((expense) => <ExpenseItem expense={expense} />)
        ) : (
          <NoExpenseMessage />
        )}
      </ScrollView>
      <FloatingButton text={"Add expense"} route={`/add-expense/${id}`} />
    </View>
  );
};
