import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";
import BottomSheet from "@gorhom/bottom-sheet";

import { useTheme } from "@/contexts";
import { AppText, BottomModal, PrimaryButton } from "@/components";
import { DEFAULT__SNAPPOINTS } from "@/constants";
import { handleModal } from "@/utils";

export default function Index() {
  const { theme } = useTheme();
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,
      }}
    >
      <Text style={{ color: theme.text }}>Welcome to pompei</Text>
      <PrimaryButton
        title="Go to dashboard"
        onPress={() => router.push("/(dashboard)")}
      />
      <PrimaryButton title="Sign in" onPress={() => router.push("/login")} />
      {/* <PrimaryButton
        title="Open sheet"
        onPress={() =>
          handleModal({
            openModal: () => setIsOpen(true),
            ref: sheetRef,
          })
        }
      /> */}

      <BottomModal
        closeModal={() => setIsOpen(false)}
        showModal={isOpen}
        sheetRef={sheetRef}
        snapPoints={DEFAULT__SNAPPOINTS}
      >
        <AppText color={theme.black}>Hey you</AppText>
        <View style={{ height: 500 }}></View>
      </BottomModal>
    </View>
  );
}
