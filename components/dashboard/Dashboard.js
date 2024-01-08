import { View, Text, SafeAreaView, Pressable, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { FONT_SIZE, SIZES } from "../../app/constants";
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
            padding: SIZES.large,
          }}
        >
          Overall, you are owed $100
        </Text>
        <FlatList
          data={[
            { id: "1", name: "Trip A", balance: 100 },
            { id: "2", name: "Trip B", balance: -50 },
            { id: "3", name: "Group C", balance: 0 },
          ]}
          renderItem={({ item }) => <GroupCard groupData={item} />}
        />
      </View>
    </View>
  );
};

export default Dashboard;
