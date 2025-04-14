import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText } from "@/components";
import { useTheme } from "@/contexts";
import { sizes } from "@/constants";
import { router } from "expo-router";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: useSafeAreaInsets().top,
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
            title="technology"
            size="xxxlarge"
            style={{ fontFamily: "GeistMedium", textAlign: "center" }}
          />
          <AppText
            title="april 14th, 2025"
            size="small"
            color={theme.border}
            style={{
              fontFamily: "GeistExtraLight",
              textAlign: "center",
              marginBottom: 5,
            }}
          />
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
            title="🇺🇸 Nvidia to Invest $500 Billion in U.S.-Based AI Supercomputers"
            size="xxlarge"
            color={theme.text}
            style={{ fontFamily: "GeistExtraLight" }}
          />

          <AppText
            title="30 minutes ago"
            size="small"
            color={theme.faintText}
            style={{ fontFamily: "GeistExtraLight", marginTop: 12 }}
          />
          <AppText
            title="Nvidia has announced plans to invest up to $500 billion in building artificial intelligence (AI) supercomputers entirely within the United States, responding to pressure from the Trump administration's push for domestic manufacturing[..]"
            size="small"
            color={theme.text}
            style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 0.5,
            backgroundColor: theme.border,
            marginVertical: 20,
          }}
        />

        <AppText
          title="entertainment"
          size="xxxlarge"
          style={{ fontFamily: "GeistMedium", textAlign: "center" }}
        />
        <AppText
          title="april 11th, 2025"
          size="small"
          color={theme.border}
          style={{
            fontFamily: "GeistExtraLight",
            textAlign: "center",
            marginBottom: 5,
          }}
        />
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
          title="Kate Winslef's Unstoppable force in 'Brilliant Mind'"
          size="xxlarge"
          color={theme.text}
          style={{ fontFamily: "GeistExtraLight" }}
        />

        <AppText
          title="2 hours ago"
          size="small"
          color={theme.faintText}
          style={{ fontFamily: "GeistExtraLight", marginTop: 12 }}
        />
        <AppText
          title="In her latest role, Kate Winslet delivers a powerhouse performance as Dr. Evelyn Moore, a neuroscientist unraveling the mysteries of human memory. With commanding presence and emotional depth, Winslet captivates in every frame.."
          size="small"
          color={theme.text}
          style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
        />
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
