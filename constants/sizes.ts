import { Dimensions } from "react-native";

export const sizes = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const DEFAULT__SNAPPOINTS = [
  "1%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
];
