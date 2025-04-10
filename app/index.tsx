import { router } from "expo-router";
import { Button, Text, View } from "react-native";

import { useTheme } from "@/contexts";

export default function Index() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text }}>
        Welcome page that the user sees by opening my app
      </Text>
      <Button title="Login" onPress={() => router.push("/login")}></Button>
    </View>
  );
}
