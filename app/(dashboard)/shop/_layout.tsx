import { Stack } from "expo-router";
import { Platform, StatusBar } from "react-native";

import { useTheme } from "@/contexts";
import { themes } from "@/constants";

export default function ShopLayout() {
  const { mode, theme } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={mode === "light" ? "dark-content" : "light-content"}
        backgroundColor={
          mode === "light" ? themes.light.background : themes.dark.background
        }
        translucent
      />
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
    </>
  );
}
