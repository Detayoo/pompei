import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function CultureLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "CULTURE",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="article/[id]"
        options={{
          title: "",
          headerTransparent: true,
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="category/[id]"
        options={{
          title: "Category",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
