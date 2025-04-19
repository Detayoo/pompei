import { RefObject, useRef, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import {
  AppText,
  BottomSheetModalComponent,
  PrimaryButton,
} from "@/components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const LogoutModal = ({
  sheetRef,
  setShowModal,
}: {
  sheetRef: RefObject<BottomSheetModal>;
  setShowModal: (state: boolean) => void;
}) => {
  return (
    <BottomSheetModalComponent sheetRef={sheetRef}>
      <View style={{ gap: 20 }}>
        <AppText>Are you sure you want to log out?</AppText>
        <View style={{ gap: 30, marginTop: 40, flexDirection: "row" }}>
          <PrimaryButton
            width="45%"
            onPress={() => router.push("/login")}
            title="Proceed"
          />
          <PrimaryButton
            width="45%"
            type="outline"
            onPress={() => {}}
            title="Proceed"
          />
        </View>
      </View>
    </BottomSheetModalComponent>
  );
};
