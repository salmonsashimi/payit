import { View, Text, SafeAreaView, Pressable, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { FONT_SIZE } from "../../app/constants";
import { buttonStyles } from "../styles";
import { GroupCard } from "./_GroupCard";

const Dashboard = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: FONT_SIZE.medium,
            padding: "10px",
          }}
        >
          Overall, you are owed $100
        </Text>
        <FlatList
          data={[
            { name: "Group A", balance: 100 },
            { name: "Group B", balance: -50 },
            { name: "Group C", balance: 0 },
          ]}
          renderItem={({ item }) => (
            <GroupCard group={item.name} balance={item.balance} />
          )}
        />
      </View>
      <View>
        <Pressable style={buttonStyles} onPress={() => {}}>
          Create group
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;
