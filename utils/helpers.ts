import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";

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
