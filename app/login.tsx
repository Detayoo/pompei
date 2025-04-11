import { View } from "react-native";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as WebBrowser from "expo-web-browser";

import { PasswordField, PrimaryButton, TextField } from "@/components";
import { useTheme } from "@/contexts";
import { loginSchema } from "@/validators";
import { openInBrowser, openInWebView } from "@/utils";

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
        label="Email address"
      />
      <PasswordField
        name="password"
        control={control}
        placeholder="Enter password"
        error={errors?.password?.message}
        label="Password"
      />
      <PrimaryButton title="Submit" onPress={handleSubmit(__handleSubmit)} />
      <PrimaryButton
        title="Open WebView"
        onPress={() => openInWebView("https://adedigba.vercel.app")}
      />
      <PrimaryButton
        title="Open web browser"
        onPress={() => openInBrowser("https://adedigba.vercel.app")}
      />
    </View>
  );
};

export default LoginPage;
