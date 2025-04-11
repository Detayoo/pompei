import { StyleProp, Text, TextStyle, TextProps } from "react-native";

import { useTheme } from "@/contexts";

const sizes = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 20,
};

export const AppText = ({
  title,
  style,
  color,
  size,
}: {
  title: string;
  style?: TextStyle;
  color?: string;
  size?: keyof typeof sizes;
}) => {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        style,
        {
          fontFamily: style?.fontFamily ?? "GeistRegular",
          color: color ?? theme.text,
          fontSize:
            size && sizes[size as keyof typeof sizes]
              ? sizes[size as keyof typeof sizes]
              : 16,
        },
      ]}
    >
      {title}
    </Text>
  );
};
