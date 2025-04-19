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
  type?: "outline";
};

export const PrimaryButton = ({ title, onPress, width, type }: ButtonProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: type === "outline" ? "transparent" : theme.buttonBg,
        paddingVertical: 16,
        borderRadius: 5,
        width: width ?? "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: type === "outline" ? 1 : 0,
        borderColor: type === "outline" ? theme.buttonBg : "transparent",
      }}
    >
      <Text
        style={{
          color: type === "outline" ? theme.text : theme.buttonText,
          fontFamily: "GeistRegular",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};
