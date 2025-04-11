import { ReactNode } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/contexts";

export const Screen = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingTop: useSafeAreaInsets().top,
        backgroundColor: theme.background,
        paddingHorizontal: 16,
      }}
    >
      {children}
    </ScrollView>
  );
};
