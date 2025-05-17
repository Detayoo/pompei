import { Text, TextProps, TextStyle } from "react-native";

import { useTheme } from "@/contexts";

type AppTextType = TextProps & {
  style?: TextStyle;
  color?: string;
  size?: keyof typeof sizes;
};

const sizes = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
  xxxlarge: 32,
};

export const AppText = ({ style, color, size, ...rest }: AppTextType) => {
  const { theme } = useTheme();

  const staticOptions = {
    fontFamily: style?.fontFamily ?? "GeistRegular",
    color: style?.color ? style?.color : color ? color : theme.text,
    fontSize:
      size && sizes[size as keyof typeof sizes]
        ? sizes[size as keyof typeof sizes]
        : 16,
  };

  return <Text style={[style, staticOptions]} {...rest} />;
};
