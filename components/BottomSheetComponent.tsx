import React, { ReactNode, RefObject, useCallback } from "react";
import { StatusBar } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export const BottomSheetComponent = ({
  sheetRef,
  snapPoints = ["50%", "60%"],
  closeModal,
  showModal,
  children,
  onChange,
}: {
  sheetRef: RefObject<any> | null | undefined;
  snapPoints: string[];
  closeModal: () => void;
  showModal: boolean;
  children: ReactNode;
  onChange?: () => void;
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
      <BottomSheetModal
        ref={sheetRef}
        // snapPoints={snapPoints}
        enablePanDownToClose
        // onClose={closeModal}
        backdropComponent={renderBackdrop}
        onChange={onChange}
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
      </BottomSheetModal>
    </>
  );
};
