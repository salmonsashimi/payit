import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { FONT_SIZE } from "../../app/constants";
import { TouchableOpacity } from "react-native-web";
import { buttonStyles } from "../styles";

const Dashboard = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, padding: "10px" }}>
      <View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: FONT_SIZE.medium,
          }}
        >
          Overall, you are owed $100
        </Text>
      </View>
      <View>
        <TouchableOpacity style={buttonStyles} onPress={() => {}}>
          Create group
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
