import React, { ReactNode, RefObject, useCallback } from "react";
import { ScrollView, StatusBar } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

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
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

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
      >
        <BottomSheetScrollView
          contentContainerStyle={{ paddingHorizontal: 16, flex: 1 }}
          showsVerticalScrollIndicator={true}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};
