import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="bilal" options={{ title: "Bilal" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
    </Stack>
  );
}
