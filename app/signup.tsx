import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { router } from "expo-router";

export default function Signup() {
  return (
    <View className="flex-1 gap-4 justify-center items-center">
      <View className=" p-3 w-full flex gap-4">
        <TextInput label="name" right={<TextInput.Icon icon="pen" />} />

        <TextInput label="email" right={<TextInput.Icon icon="email" />} />

        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button
          contentStyle={{ height: 60 }}
          icon="cursor-default-click"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Sign Up
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
          Sign Up with Google
        </Button>
      </View>
      <View className="flex flex-row   justify-center items-center">
        <Text className="font-semibold">Already Have An Account?</Text>
        <Button
          rippleColor={"transparent"}
          mode="text"
          onPress={() => router.push({ pathname: "/signin" })}
        >
          Login
        </Button>
      </View>
    </View>
  );
}
