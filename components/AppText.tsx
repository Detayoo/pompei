import { Text, TextProps } from "react-native";

import { useTheme } from "@/contexts";

export const AppText = ({
  title,
  style,
}: {
  title: string;
  style?: TextProps;
}) => {
  const { theme } = useTheme();
  return <Text style={{ ...style, color: theme.text }}>{title}</Text>;
};
