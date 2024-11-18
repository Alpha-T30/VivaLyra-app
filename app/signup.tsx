import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { router } from "expo-router";
import { useForm, Controller, useFormState } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/auth-context";
export default function Signup() {
  const { session, user, mounting } = useAuth();

  const signUpSchema = zod.object({
    name: zod.string(),
    email: zod.string().email({ message: "Incert a valid email" }),
    password: zod.string().min(6, { message: "Need at least 6 characters" }),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const signUp = async (userdata: zod.infer<typeof signUpSchema>) => {
    const { error } = await supabase.auth.signUp({
      email: userdata.email,
      password: userdata.password,
      options: {
        data: {
          name: userdata.name,
          avatar_url: "https://wallpapercave.com/wp/wp7149700.jpg",
        },
      },
    });

    console.log(error);
  };

  return (
    <View className="flex-1 gap-4 justify-center items-center">
      <View className=" p-3 w-full flex gap-4">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <>
              <TextInput
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                editable={!isSubmitting}
                right={<TextInput.Icon icon="pen" />}
              />
              {errors.name && (
                <Text className="text-red-500">{errors.name?.message}</Text>
              )}
            </>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Email"
                editable={!isSubmitting}
                right={<TextInput.Icon icon="email" />}
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email?.message}</Text>
              )}
            </>
          )}
        ></Controller>
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
                placeholder="Password"
                editable={!isSubmitting}
                right={<TextInput.Icon icon="eye" />}
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password?.message}</Text>
              )}
            </>
          )}
        ></Controller>

        <Button
          disabled={isSubmitting}
          contentStyle={{ height: 60 }}
          icon="cursor-default-click"
          mode="contained"
          onPress={handleSubmit(signUp)}
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
