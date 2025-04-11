import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Geist_400Regular as GeistRegular,
  Geist_500Medium as GeistMedium,
  Geist_600SemiBold as GeistSemiBold,
  Geist_700Bold as GeistBold,
} from "@expo-google-fonts/geist";
import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "@/contexts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    GeistRegular,
    GeistMedium,
    GeistSemiBold,
    GeistBold,
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
    return null;
  }

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
