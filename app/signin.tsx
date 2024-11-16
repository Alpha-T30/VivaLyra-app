import { View, Text } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

import { router } from "expo-router";

export default function Signin() {
  return (
    <View className="flex-1 gap-4 justify-center items-center">
      <View className=" p-3 w-full flex gap-4">
        <TextInput label="email" right={<TextInput.Icon icon="email" />} />

        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button
          contentStyle={{ height: 60 }}
          icon="login"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
        <Button
          contentStyle={{
            height: 60,
            display: "flex",
            gap: 10,
          }}
          icon="google"
          mode="outlined"
          onPress={() => console.log("Pressed")}
        >
          Login with Google
        </Button>
      </View>
      <View className="flex flex-row   justify-center items-center">
        <Text className="font-semibold">Don't Have An Account?</Text>
        <Button
          rippleColor={"transparent"}
          mode="text"
          onPress={() => router.push({ pathname: "/signup" })}
        >
          Sign UP
        </Button>
      </View>
    </View>
  );
}
