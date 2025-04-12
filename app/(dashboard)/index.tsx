import { Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
        paddingTop: useSafeAreaInsets().top,
        paddingHorizontal: 16,
      }}
    >
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
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

        {/* <AppText title="New" size="medium" color={theme.text} /> */}
        <AppText
          title="Kate Winslef's Unstoppable force in 'Brilliant Mind'"
          size="xxlarge"
          color={theme.text}
          style={{ fontFamily: "GeistExtraLight" }}
        />
        {/* <AppText
          title="Tayo Adedigba"
          size="large"
          color={theme.text}
          style={{ fontFamily: "GeistRegular", marginTop: 12 }}
        /> */}
        <AppText
          title="2 hours ago"
          size="small"
          color={theme.faintText}
          style={{ fontFamily: "GeistExtraLight", marginTop: 12 }}
        />
        <AppText
          title="In her latest role, Kate Winslet delivers a powerhouse performance as Dr. Evelyn Moore, a neuroscientist unraveling the mysteries of human memory. With commanding presence and emotional depth, Winslet captivates in every frame. The film explores genius, vulnerability, and the blurred line between brilliance and madness. Critics are already calling it her most daring role since The Reader. Winslet brings gravitas to a character wrestling with both trauma and triumph. Director Lena Harmon crafts a cerebral yet intimate narrative, and Winslet owns every moment. Brilliant Mind is more than a film—it's a reminder of Winslet's enduring brilliance."
          size="small"
          color={theme.text}
          style={{ marginTop: 12, fontFamily: "GeistExtraLight" }}
        />
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
