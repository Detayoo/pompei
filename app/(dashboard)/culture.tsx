import { useEffect, useRef, useState } from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

import { AppText, Screen } from "@/components";
import { useTheme } from "@/contexts";

const CulturePage = () => {
  const { theme } = useTheme();
  const [sound, setSound] = useState<any>();
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const interval = useRef<NodeJS.Timer | null>(null);

  const loadAndPlay = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/anthropic-prompt-engineering.mp3"),
      { shouldPlay: true }
    );

    setSound(sound);

    const status = await sound.getStatusAsync();
    if (status.isLoaded) {
      setDuration(status.durationMillis ?? 0);
    }

    interval.current = setInterval(async () => {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && status.positionMillis != null) {
        setPosition(status.positionMillis);
      }
    }, 500);
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const seconds = Math.floor(((duration - position) % 60000) / 1000);
  const refinedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const minute = Math.floor(((duration - position) % 3600000) / 60000);
  const refinedMinute = minute < 10 ? `0${minute}` : minute;
  const hour = Math.floor((duration - position) / 3600000);
  const refinedHour = hour < 10 ? `0${hour}` : hour;

  return (
    <Screen>
      <View
        style={{ flex: 1, backgroundColor: theme.background, width: "100%" }}
      >
        {/* <AppText>Culture page</AppText> */}
        <View style={{ width: "100%", position: "absolute", bottom: 20 }}>
          <AppText style={{ fontFamily: "GeistMedium", marginBottom: 10 }}>
            Now Playing
          </AppText>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              backgroundColor: theme.background,
              gap: 12,
            }}
          >
            <Image
              source={require("../../assets/images/square.webp")}
              style={{ height: 80, width: 80 }}
            />
            <View
              style={{
                flexDirection: "column",
                paddingTop: 10,
                justifyContent: "space-between",
                flex: 1,
                paddingRight: 12,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <AppText
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "GeistBold",
                    }}
                  >
                    cultural voices
                  </AppText>
                  <AppText>exploring identity and heritage</AppText>
                </View>
                <Ionicons
                  name="play-forward"
                  size={26}
                  style={{ marginLeft: "auto" }}
                  onPress={loadAndPlay}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <View
                  style={{ backgroundColor: theme.border, height: 2, flex: 1 }}
                >
                  <View
                    style={{
                      backgroundColor: theme.black,
                      width: `${(position / duration) * 100 || 0}%`,
                      height: 2,
                    }}
                  />
                </View>
                <AppText size="xsmall">
                  {`${refinedHour}:${refinedMinute}:${refinedSeconds}`}{" "}
                </AppText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default CulturePage;
