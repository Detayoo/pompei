import { RefObject, useRef, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import {
  AppText,
  BottomSheetModalComponent,
  PrimaryButton,
} from "@/components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

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
          width: "100%",
        }}
      >
        {/* <Ionicons name="log-out-outline" size={50} color="#c00" /> */}
        <AppText size="medium" style={{}}>
          Are you sure you want to log out of the app?
        </AppText>
        <View
          style={{
            gap: 10,
            marginTop: 30,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <PrimaryButton
            width="45%"
            onPress={() => router.push("/login")}
            title="Yes, proceed"
          />
          <PrimaryButton
            width="45%"
            type="outline"
            onPress={() => {}}
            title="No, cancel"
          />
        </View>
      </View>
    </BottomSheetModalComponent>
  );
};
