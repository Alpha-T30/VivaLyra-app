import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="font-bold"> Home Page Tab</Text>
      <Button
        icon="cart"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}
