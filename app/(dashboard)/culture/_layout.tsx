import { Stack } from "expo-router";
import { Platform, StatusBar } from "react-native";

import { themes } from "@/constants";
import { useTheme } from "@/contexts";
export default function CultureLayout() {
  const { mode } = useTheme();
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
    </>
  );
}
