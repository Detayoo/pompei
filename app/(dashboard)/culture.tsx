import { View } from "react-native";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";

const CulturePage = () => {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <AppText title="Culture Page"></AppText>
    </View>
  );
};

export default CulturePage;
