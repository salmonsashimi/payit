import { Pressable, SafeAreaView, View ,StyleSheet} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLOURS, FONT_SIZE ,SIZES} from "@app/constants";
import { FloatingButton } from "../common/FloatingButton";

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: COLOURS.backgroundColor},
    container: {
      flex: 1,
      padding: SIZES.extraLarge,
    },
    
  });

export const GroupInfo = () => {
    
    return (
        <View style={styles.wrapper}>
          <View style={styles.container}>

{/* // add expense */}
{/*  expense list*/}
{/*  actions*/}
<FloatingButton text={"Create expense"} route={"/create"}/>
          </View>
        </View>
    )
}