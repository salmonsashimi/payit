import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SIZES } from "@app/constants";
export const ArrowBack = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={{ padding: SIZES.medium }}>
<Ionicons name="arrow-back" size={24} color="white" />
    </Pressable>
  );
};
