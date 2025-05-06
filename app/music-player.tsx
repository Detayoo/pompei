import { View } from "react-native";

import { AppText, Screen } from "@/components";
import { Ionicons } from "@expo/vector-icons";

const MusicPlayer = () => {
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="play-circle" size={100} color="black" />
          <AppText style={{ color: "black", fontSize: 24, marginTop: 20 }}>
            Now Playing
          </AppText>
          <View>
            <AppText
              style={{
                textTransform: "uppercase",
                fontFamily: "GeistBold",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              cultural voices
            </AppText>
            <AppText>exploring identity and heritage</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="play-back"
              size={50}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Ionicons
              name="pause"
              size={50}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
            <Ionicons
              name="play-forward"
              size={50}
              color="black"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default MusicPlayer;
