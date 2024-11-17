import { View, Text } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";

import { router } from "expo-router";
import * as zod from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";

export default function Signin() {
  const signinSchema = zod.object({
    email: zod.string().email({ message: "Incert a valid email " }),
    password: zod.string().min(6, { message: "At least 6 character needed" }),
  });
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const signIn = async (value: zod.infer<typeof signinSchema>) => {
    const { data, error } = await supabase.auth.signInWithPassword(value);
    console.log(data);
    console.log(error?.message);
  };
  return (
    <View className="flex-1 gap-4 justify-center items-center">
      <View className=" p-3 w-full flex gap-4">
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <>
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                editable={!isSubmitting}
                placeholder="email"
                right={<TextInput.Icon icon="email" />}
              />
              {errors.email && (
                <Text className="text-red-600">{errors.email.message}</Text>
              )}
            </>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <>
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                editable={!isSubmitting}
                placeholder="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
              {errors.password && (
                <Text className="text-red-600">{errors.password.message}</Text>
              )}
            </>
          )}
        />

        <Button
          contentStyle={{ height: 60 }}
          icon="login"
          mode="contained"
          onPress={handleSubmit(signIn)}
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
