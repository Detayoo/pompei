import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";
import BottomSheet from "@gorhom/bottom-sheet";

import { useTheme } from "@/contexts";
import { AppText, BottomModal, PrimaryButton } from "@/components";
import { DEFAULT__SNAPPOINTS } from "@/constants";

export default function Index() {
  const { theme } = useTheme();
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleModal = (index: number) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text }}>
        Welcome page that the user sees by opening my app
      </Text>
      <PrimaryButton
        title="Go to dashboard"
        onPress={() => router.push("/(dashboard)")}
      />
      <PrimaryButton
        title="Go to login"
        onPress={() => router.push("/login")}
      />
      <PrimaryButton
        title="Open sheet"
        onPress={() => handleModal(DEFAULT__SNAPPOINTS?.length - 3)}
      />

      <BottomModal
        closeModal={() => setIsOpen(false)}
        showModal={isOpen}
        sheetRef={sheetRef}
        snapPoints={DEFAULT__SNAPPOINTS}
      >
        <AppText title="Hey there" />
        <View style={{ height: 500 }}></View>
      </BottomModal>
    </View>
  );
}
