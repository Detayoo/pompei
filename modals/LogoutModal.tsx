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
    <BottomSheetModalComponent snapPoints={["30%"]} sheetRef={sheetRef}>
      <View
        style={{
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText size="medium" style={{}}>
          Are you sure you want to log out?
        </AppText>
        <View style={{ gap: 30, marginTop: 30, flexDirection: "row" }}>
          <PrimaryButton
            width="45%"
            onPress={() => router.push("/login")}
            title="Proceed"
          />
          <PrimaryButton
            width="45%"
            type="outline"
            onPress={() => {}}
            title="Cancel"
          />
        </View>
      </View>
    </BottomSheetModalComponent>
  );
};
