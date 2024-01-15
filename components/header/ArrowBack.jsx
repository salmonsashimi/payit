import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from "@app/constants";
export const ArrowBack = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={{ padding: SIZES.medium }}>
      <Ionicons name="chevron-back-outline" size={25} color="white" />
    </Pressable>
  );
};
