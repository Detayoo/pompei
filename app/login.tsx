import { AppText } from "@/components";
import { useTheme } from "@/contexts";
import { Text, View } from "react-native";

const LoginPage = () => {
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
      <AppText  title="Here is the login screen" />
    </View>
  );
};

export default LoginPage;
