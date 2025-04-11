import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";

const OrdersPage = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: useSafeAreaInsets().top,
        backgroundColor: theme.background,
      }}
    >
      <AppText title="Orders Page"></AppText>
    </View>
  );
};

export default OrdersPage;
