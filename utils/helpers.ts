import { RefObject } from "react";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { DEFAULT__SNAPPOINTS } from "@/constants";

export const openInBrowser = async (url: string) =>
  await WebBrowser.openBrowserAsync(url);

export const openInWebView = (url: string) => {
  router.push({
    pathname: "/webview",
    params: {
      url,
    },
  });
};

export const handleModal = ({
  ref,
  index = DEFAULT__SNAPPOINTS?.length - 1,
  openModal,
}: {
  ref: RefObject<BottomSheetMethods>;
  index?: number;
  openModal: () => void;
}) => {
  ref.current?.snapToIndex(index);
  openModal();
};
