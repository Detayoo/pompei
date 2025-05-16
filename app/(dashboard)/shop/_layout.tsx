import { Stack } from "expo-router";
import { Platform } from "react-native";

import { useTheme } from "@/contexts";

export default function ShopLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
          fontSize: 20,
          color: theme.text,
        },
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "SHOP",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="product/[id]"
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
      <Stack.Screen
        name="collection/[id]"
        options={{
          title: "Collection",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
