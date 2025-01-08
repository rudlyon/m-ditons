import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "home" }} />
      <Stack.Screen name="tableau-hiver" options={{ title: "tableau-hiver" }} />
      <Stack.Screen name="tableau-ete" options={{ title: "tableau-été" }} />
      <Stack.Screen
        name="tableau-printemps"
        options={{ title: "tableau-printemps" }}
      />
    </Stack>
  );
}
