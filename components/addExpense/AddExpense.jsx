import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { COLOURS, FONT_SIZE, SIZES } from "@app/constants";
import { ExpenseInput } from "./_ExpenseInput";
import { ExpenseBy } from "./_ExpenseBy";

export const AddExpense = () => {
  const router = useRouter();
  const styles = StyleSheet.create({
    container: {
      padding: SIZES.large,
    },
    header: {
      fontWeight: 600,
      fontSize: FONT_SIZE.medium,
    },
  });

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>With "THE GROUP NAME HERE"</Text>
      <ExpenseInput
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
      />
      <ExpenseBy />
    </View>
  );
};
