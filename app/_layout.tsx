import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "../global.css"; // Importing the global CSS for Tailwind styles

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </PaperProvider>
  );
}
