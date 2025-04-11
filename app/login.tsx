import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { PrimaryButton, TextField } from "@/components";
import { useTheme } from "@/contexts";
import { loginSchema } from "@/validators";

type LoginInputType = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const { theme } = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(loginSchema),
  });

  const __handleSubmit = (data: LoginInputType) => {
    console.log(data);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
        paddingHorizontal: 16,
        gap: 30,
      }}
    >
      <TextField
        name="email"
        control={control}
        placeholder="Enter your email"
        error={errors?.email?.message}
      />
      <TextField
        name="password"
        control={control}
        placeholder="Enter password"
        error={errors?.password?.message}
      />
      <PrimaryButton title="Submit" onPress={handleSubmit(__handleSubmit)} />
    </View>
  );
};

export default LoginPage;
