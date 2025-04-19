import { useTheme } from "@/contexts";
import {
  ButtonProps as DefaultButtonProps,
  Text,
  Pressable,
  DimensionValue,
} from "react-native";

type ButtonProps = DefaultButtonProps & {
  title: string;
  onPress: () => void;
  width?: DimensionValue;
};

export const PrimaryButton = ({ title, onPress, width }: ButtonProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: theme.buttonBg,
        paddingVertical: 16,
        borderRadius: 5,
        width: width ?? "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme.buttonText, fontFamily: "GeistRegular" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export const
