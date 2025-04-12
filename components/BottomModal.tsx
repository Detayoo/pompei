import React, { ReactNode, RefObject, useCallback } from "react";
import { StatusBar } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ModalBackground } from "./ModalBackground";

export const BottomModal = ({
  sheetRef,
  snapPoints = ["50%", "60%"],
  closeModal,
  showModal,
  children,
}: {
  sheetRef: RefObject<BottomSheetMethods> | null | undefined;
  snapPoints: string[];
  closeModal: () => void;
  showModal: boolean;
  children: ReactNode;
}) => {
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
  if (showModal)
    return (
      <>
        <StatusBar
          barStyle="default"
          backgroundColor={showModal ? "rgba(0, 0, 0, 0.5)" : ""}
        />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose
          onClose={closeModal}
          backdropComponent={renderBackdrop}
          // backgroundComponent={ModalBackground}
        >
          <BottomSheetScrollView
            contentContainerStyle={{
              paddingHorizontal: 16,
              flex: 1,
              backgroundColor: "#fff",
            }}
            showsVerticalScrollIndicator={true}
          >
            {children}
          </BottomSheetScrollView>
        </BottomSheet>
      </>
    );
};
