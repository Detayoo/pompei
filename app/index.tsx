import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Welcome page that the user sees by opening my app</Text>
      <Button title="Login" onPress={() => router.push("/login")}></Button>
    </View>
  );
}
