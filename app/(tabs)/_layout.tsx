import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }}></Tabs.Screen>
      <Tabs.Screen name="cart" options={{ headerShown: false }}></Tabs.Screen>
      <Tabs.Screen name="orders" options={{ headerShown: false }}></Tabs.Screen>
    </Tabs>
  );
}
