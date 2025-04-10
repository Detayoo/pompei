import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import { ThemeProvider } from "@/contexts";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar barStyle="default" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(dashboard)"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
