import { View, Text } from "react-native";
import React from "react";
import { SegmentedButtons } from "react-native-paper";

export default function OrdersHome() {
  const [value, setValue] = React.useState("left");
  return (
    <View className="flex-1 p-3 gap-4">
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "left",
            label: "Pending Orders",
          },

          { value: "right", label: "Previous Orders" },
        ]}
      />
      <View>
        <Text className="font-bold">
          just change the product value to pending or previous order and map
          them according to the value of the button
        </Text>
      </View>
    </View>
  );
}
