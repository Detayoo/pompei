import { Text, View } from "react-native";
import { router } from "expo-router";

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
        title="Go to dashboard"
        onPress={() => router.push("/(dashboard)")}
      />
      <PrimaryButton
        title="Go to login"
        onPress={() => router.push("/login")}
      />
    </View>
  );
}
