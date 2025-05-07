import { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

import { AppText, Screen } from "@/components";
import { useTheme } from "@/contexts";
import { sizes } from "@/constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const Item = ({
  image,
  category,
  headline,
  author,
}: {
  image: ImageSourcePropType;
  category: string;
  headline: string;
  author: string;
}) => {
  return (
    <View
      style={{
        gap: 2,
      }}
    >
      <Image source={image} style={{ height: 400, width: sizes.width - 32 }} />
      <AppText
        style={{
          marginTop: 15,
          textTransform: "uppercase",
          fontFamily: "GeistSemiBold",
        }}
        size="medium"
      >
        {category}
      </AppText>
      <AppText size="large" style={{}}>
        {headline}
      </AppText>
      <AppText>by {author}</AppText>
    </View>
  );
};

const CulturePage = () => {
  const { theme } = useTheme();
  const [sound, setSound] = useState<any>();
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const interval = useRef<any>(null);

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
    <View style={{ flex: 1, backgroundColor: theme.background, width: "100%" }}>
      {/* <AppText>Culture page</AppText> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingTop: useSafeAreaInsets().top,
          backgroundColor: theme.background,
          paddingHorizontal: 16,
          marginBottom: 130,
        }}
        contentContainerStyle={{
          width: "100%",
          gap: 40,
        }}
      >
        <Item
          image={require("../../assets/images/vogue-5.jpeg")}
          category="Music"
          headline="The Playlist Empress: The Woman, the Myth, the Movement."
          author="Tayo Adedigba"
        />
        <Item
          image={require("../../assets/images/vogue-6.jpg")}
          category="Art"
          headline="Where Dreams Take Shape: Unleashing Artistic Brilliance and Timeless Beauty"
          author="Fola Daniels"
        />
      </ScrollView>
      <Pressable
        onPress={() => router.push("/music-player")}
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: theme.background,
          paddingTop: 10,
          paddingHorizontal: 16,
        }}
      >
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "auto",
                  gap: 8,
                }}
              >
                <Ionicons
                  name="pause"
                  size={20}
                  // style={{ marginLeft: "auto" }}
                  onPress={loadAndPlay}
                  color={theme.buttonBg}
                />
                <Ionicons
                  name="play-forward"
                  size={20}
                  style={{ marginLeft: "auto" }}
                  onPress={loadAndPlay}
                  color={theme.buttonBg}
                />
              </View>
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
      </Pressable>
    </View>
  );
};

export default CulturePage;
