import React from "react";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/contexts";

const WebViewPage = () => {
  const { theme } = useTheme();
  const { url } = useLocalSearchParams();

  return (
    <WebView
      source={{ uri: url as any }}
      style={{
        paddingTop: useSafeAreaInsets().top,
        backgroundColor: theme.background,
        flex: 1,
      }}
    />
  );
};

export default WebViewPage;
