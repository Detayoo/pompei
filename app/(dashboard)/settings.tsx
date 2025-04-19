import { useRef, useState } from "react";

import { PrimaryButton, Screen } from "@/components";
import { LogoutModal } from "@/modals";

const Settings = () => {
  const sheetRef = useRef<any>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    sheetRef.current?.present();
  };
  return (
    <Screen>
      <PrimaryButton title="Logout" onPress={openModal} />
      <LogoutModal sheetRef={sheetRef} setShowModal={setShowModal} />
    </Screen>
  );
};

export default Settings;
