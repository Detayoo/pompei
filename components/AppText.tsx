import { Text, TextProps } from "react-native";

import { useTheme } from "@/contexts";

export const AppText = ({
  title,
  style,
  color,
}: {
  title: string;
  style?: TextProps;
  color?: string;
}) => {
  const { theme } = useTheme();
  return <Text style={{ ...style, color: color ?? theme.text }}>{title}</Text>;
};
