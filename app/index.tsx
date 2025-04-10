import { router } from "expo-router";
import { Button, Text, View } from "react-native";

import { useTheme } from "@/contexts";
import { PrimaryButton } from "@/components";

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
      <PrimaryButton
        title="Go to Login"
        onPress={() => router.push("/login")}
      />
    </View>
  );
}
