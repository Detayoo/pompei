import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { useController, Control } from "react-hook-form";

import { useTheme } from "@/contexts";
import { AppText } from "./AppText";
import { useState } from "react";

type InputFieldProps<T> = TextInputProps & {
  name: string;
  control: Control<any, any, T>;
  error: string | undefined;
  label: string;
};

export const TextField = <T,>({
  name,
  control,
  error,
  label,
  ...rest
}: InputFieldProps<T>) => {
  const { theme } = useTheme();
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <AppText title={label} size="small" />
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
          marginBottom: 3,
          borderColor: error ? "#cc0000" : theme.border,
          borderRadius: 5,
          color: theme.text,
          fontFamily: "Geist_400Regular",
          marginTop: 6,
        }}
      />
      {!!error && (
        <AppText title={error?.toString()} color="#cc0000" size="small" />
      )}
    </View>
  );
};
export const PasswordField = <T,>({
  name,
  control,
  error,
  label,
  ...rest
}: InputFieldProps<T>) => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <AppText title={label} size="small" />
      <View
        style={{
          borderWidth: 1,
          height: 50,
          width: "100%",
          marginBottom: 3,
          borderColor: error ? "#cc0000" : theme.border,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          marginTop: 6,
        }}
      >
        <TextInput
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          style={{
            paddingVertical: 10,
            color: theme.text,
            flex: 1,
            fontFamily: "Geist_400Regular",
          }}
          secureTextEntry={!show}
        />
        <Pressable onPress={() => setShow(!show)}>
          <AppText title={show ? "Hide" : "Show"} size="small" />
        </Pressable>
      </View>
      {!!error && (
        <AppText title={error?.toString()} color="#cc0000" size="small" />
      )}
    </View>
  );
};
