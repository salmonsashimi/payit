import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export const ArrowBack = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
      <Ionicons name="chevron-back-outline" size={30} color="white" />
    </Pressable>
  );
};
