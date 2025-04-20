import { RefObject } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import {
  AppText,
  BottomSheetModalComponent,
  PrimaryButton,
} from "@/components";

export const LogoutModal = ({
  sheetRef,
  closeModal,
}: {
  sheetRef: RefObject<BottomSheetModal>;
  closeModal: () => void;
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
            onPress={closeModal}
            title="No, cancel"
          />
        </View>
      </View>
    </BottomSheetModalComponent>
  );
};
