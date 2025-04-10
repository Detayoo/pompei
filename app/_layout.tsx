import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "@/contexts";

export default function RootLayout() {
  return (
      <ThemeProvider>
    <SafeAreaProvider>
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
    </SafeAreaProvider>
      </ThemeProvider>
  );
}
