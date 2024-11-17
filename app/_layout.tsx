import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import AuthContextProvider from "@/context/auth-context";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <PaperProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="signup" options={{ headerShown: false }} />
              <Stack.Screen name="signin" options={{ headerShown: false }} />
            </Stack>
          </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
