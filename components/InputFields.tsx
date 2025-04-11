import { TextInput, TextInputProps } from "react-native";
import { useController, Control } from "react-hook-form";

import { useTheme } from "@/contexts";

type InputFieldProps = TextInputProps & {
  name: string;
  control: Control;
};

export const TextField = ({ name, control, ...rest }: InputFieldProps) => {
  const { theme } = useTheme();
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <TextInput
      {...rest}
      value={field.value}
      onChangeText={field.onChange}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        height: 50,
        width: "100%",
        marginBottom: 20,
        borderColor: theme.border,
        borderRadius: 5,
        color: theme.text,
      }}
    />
  );
};
