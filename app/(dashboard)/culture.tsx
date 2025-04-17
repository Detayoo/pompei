import { View } from "react-native";

import { AppText, Screen } from "@/components";
import { useTheme } from "@/contexts";

const CulturePage = () => {
  const { theme } = useTheme();
  return (
    <Screen>
      <View style={{ flex: 1, backgroundColor: theme.background }}>
        <AppText>Culture page</AppText>
      </View>
    </Screen>
  );
};

export default CulturePage;
