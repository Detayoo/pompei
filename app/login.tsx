import { View } from "react-native";
import { useForm } from "react-hook-form";

import { AppText, PrimaryButton, TextField } from "@/components";
import { useTheme } from "@/contexts";

const LoginPage = () => {
  const { theme } = useTheme();
  const { control, handleSubmit } = useForm();

  const __handleSubmit = (data) => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
        paddingHorizontal: 16,
      }}
    >
      <TextField
        name="email"
        control={control}
        placeholder="Enter your email"
      />
      <TextField
        name="password"
        control={control}
        placeholder="Enter password"
      />
      <PrimaryButton title="Submit" onPress={handleSubmit(__handleSubmit)} />
    </View>
  );
};

export default LoginPage;
