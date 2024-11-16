import { View, Text, FlatList } from "react-native";
import React from "react";

import { cartItems } from "@/constants/data";

export default function Cart() {
  const numberOfColumns = 1;
  return (
    <View className="flex-1 p-5">
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        key={numberOfColumns}
        numColumns={numberOfColumns}
        keyExtractor={(item) => item.id.toString()}
        data={cartItems}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                margin: 10,
                backgroundColor: "grey",
                display: "flex",
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                height: 60,
              }}
            >
              <Text>{item.name}</Text>
              <Text>{item.quantity}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}
