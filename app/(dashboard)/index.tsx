import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";
import { sizes } from "@/constants";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        // paddingTop: useSafeAreaInsets().top,
        paddingHorizontal: 16,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/details",
              params: {
                title:
                  "🇺🇸 Nvidia to Invest $500 Billion in U.S.-Based AI Supercomputers",
              },
            })
          }
        >
          <AppText
            size="xxxlarge"
            style={{ fontFamily: "GeistMedium", textAlign: "center" }}
          >
            technology
          </AppText>
          <AppText
            size="small"
            color={theme.border}
            style={{
              fontFamily: "GeistExtraLight",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            april 14th, 2025
          </AppText>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              marginTop: -10,
            }}
          >
            <Image
              source={require("../../assets/images/tech.png")}
              style={{
                width: "100%",
                height: sizes.height / 2.2,
              }}
              resizeMode="contain"
            />
          </View>

          <AppText
            size="xxlarge"
            color={theme.text}
            style={{ fontFamily: "GeistExtraLight" }}
          >
            🇺🇸 Nvidia to Invest $500 Billion in U.S.-Based AI Supercomputers
          </AppText>

          <AppText
            size="small"
            color={theme.faintText}
            style={{ fontFamily: "GeistExtraLight", marginTop: 12 }}
          >
            30 minutes ago
          </AppText>
          <AppText
            size="small"
            color={theme.text}
            style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
          >
            Nvidia has announced plans to invest up to $500 billion in building
            artificial intelligence (AI) supercomputers entirely within the
            United States, responding to pressure from the Trump
            administration's push for domestic manufacturing[..]
          </AppText>
        </TouchableOpacity>
        <View
          style={{
            height: 0.5,
            backgroundColor: theme.border,
            marginVertical: 20,
          }}
        />

        <AppText
          size="xxxlarge"
          style={{ fontFamily: "GeistMedium", textAlign: "center" }}
        >
          entertainment
        </AppText>
        <AppText
          size="small"
          color={theme.border}
          style={{
            fontFamily: "GeistExtraLight",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          april 11th, 2025
        </AppText>
        <View
          style={{
            width: "100%",
            justifyContent: "flex-start",
            marginTop: -10,
          }}
        >
          <Image
            source={require("../../assets/images/square.webp")}
            style={{
              width: "100%",
              height: sizes.height / 2.2,
            }}
            resizeMode="contain"
          />
        </View>

        <AppText
          size="xxlarge"
          color={theme.text}
          style={{ fontFamily: "GeistExtraLight" }}
        >
          Kate Winslef's Unstoppable force in 'Brilliant Mind'
        </AppText>

        <AppText
          size="small"
          color={theme.faintText}
          style={{ fontFamily: "GeistExtraLight", marginTop: 12 }}
        >
          2 hours ago
        </AppText>
        <AppText
          size="small"
          color={theme.text}
          style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
        >
          In her latest role, Kate Winslet delivers a powerhouse performance as
          Dr. Evelyn Moore, a neuroscientist unraveling the mysteries of human
          memory. With commanding presence and emotional depth, Winslet
          captivates in every frame..
        </AppText>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
