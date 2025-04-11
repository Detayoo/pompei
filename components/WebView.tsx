import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export const MyWebView = ({ route }: { route: any }) => {
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
