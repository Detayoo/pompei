import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText, PrimaryButton } from "@/components";
import { useTheme } from "@/contexts";
import { DEFAULT__SNAPPOINTS, sizes } from "@/constants";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

const DashboardPage = () => {
  const { theme } = useTheme();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );

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
      <PrimaryButton title="Show" onPress={handlePresentModalPress} />

      <BottomSheetModal
        onDismiss={() => {}}
        // snapPoints={DEFAULT__SNAPPOINTS}
        snapPoints={["25%", "70%", "90%"]}
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          style={{
            flexGrow: 1,
            paddingHorizontal: 16,
          }}
        >
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Text>Awesome 🎉</Text>
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default DashboardPage;
