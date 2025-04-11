import { useTheme } from "@/contexts";
import { ReactNode } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Screen = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingTop: useSafeAreaInsets().top,
        backgroundColor: theme.background,
      }}
    >
      {children}
    </ScrollView>
  );
};
