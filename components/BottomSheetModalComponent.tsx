import { ReactNode, RefObject, useCallback } from "react";
import { ScrollView } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

export const BottomSheetModalComponent = ({
  sheetRef,
  children,
}: {
  sheetRef: RefObject<BottomSheetModal>;
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
  return (
    <BottomSheetModal
      onDismiss={() => {}}
      snapPoints={["25%", "70%", "90%"]}
      ref={sheetRef}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          {children}
        </ScrollView>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
