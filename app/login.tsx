import { View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AppText, PasswordField, PrimaryButton, TextField } from "@/components";
import { useTheme } from "@/contexts";
import { loginSchema } from "@/validators";
import { router } from "expo-router";

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
    router.replace("/(dashboard)");
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
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <AppText
          size="large"
          style={{ fontFamily: "GeistBold", marginBottom: 3 }}
        >
          Welcome back
        </AppText>
        <AppText>Let's get you logged in</AppText>
      </View>
      <TextField
        name="email"
        control={control}
        placeholder="Enter your email"
        error={errors?.email?.message}
        label="Email address"
      />
      <PasswordField
        name="password"
        control={control}
        placeholder="Enter password"
        error={errors?.password?.message}
        label="Password"
      />
      <PrimaryButton title="Sign in" onPress={handleSubmit(__handleSubmit)} />
    </View>
  );
};

export default LoginPage;
