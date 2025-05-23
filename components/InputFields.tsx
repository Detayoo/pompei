import { useState } from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { useController, Control } from "react-hook-form";

import { useTheme } from "@/contexts";
import { AppText } from "./AppText";

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
      <AppText size="small">{label}</AppText>
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
          fontFamily: "GeistRegular",
          marginTop: 6,
        }}
      />
      {!!error && (
        <AppText color="#cc0000" size="small">
          {error?.toString()}
        </AppText>
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
      <AppText size="small">{label}</AppText>
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
            fontFamily: "GeistRegular",
          }}
          secureTextEntry={!show}
        />
        <Pressable onPress={() => setShow(!show)}>
          <AppText size="small">{show ? "Hide" : "Show"}</AppText>
        </Pressable>
      </View>
      {!!error && (
        <AppText color="#cc0000" size="small">
          {error?.toString()}
        </AppText>
      )}
    </View>
  );
};
