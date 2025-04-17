import { useRef, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { AppText, BottomModal, PrimaryButton } from "@/components";
import { DEFAULT__SNAPPOINTS } from "@/constants";

export const LogoutModal = () => {
  const [showModal, setShowModal] = useState(false);
  const sheetRef = useRef(null);
  return (
    <BottomModal
      closeModal={() => setShowModal(false)}
      showModal={showModal}
      sheetRef={sheetRef}
      snapPoints={DEFAULT__SNAPPOINTS}
    >
      <View style={{ gap: 20 }}>
        <AppText>Are you sure you want to log out?</AppText>
        <View style={{ gap: 30, marginTop: 40 }}>
          <PrimaryButton
            onPress={() => router.push("/login")}
            title="Proceed"
          />
          <AppText onPress={() => setShowModal(false)}>Cancel</AppText>
        </View>
      </View>
    </BottomModal>
  );
};
