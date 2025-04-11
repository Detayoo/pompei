import { View } from "react-native";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";

const DashboardPage = () => {
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
      <AppText title="Hey there. Welcome" size="small" />
    </View>
  );
};

export default DashboardPage;
