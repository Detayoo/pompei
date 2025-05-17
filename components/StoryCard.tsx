import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
// import { Image as ExpoImage } from "expo-image";

import { Story } from "@/types";
import { useTheme } from "@/contexts";
import { AppText } from "./AppText";

const { width } = Dimensions.get("window");
const cardWidth = (width - 40) / 2;

interface StoryCardProps {
  story: Story;
  onPress: () => void;
  small?: boolean;
}

export function StoryCard({ story, onPress, small = false }: StoryCardProps) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, small && styles.smallContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: story.imageUrl }}
        style={[styles.image, small && styles.smallImage]}
        // contentFit="cover"
      />
      <View style={styles.contentContainer}>
        <AppText
          style={{
            fontSize: 12,
            color: theme.text,
            marginBottom: 4,
            fontWeight: "500",
          }}
        >
          {story.category}
        </AppText>
        <AppText
          style={[
            {
              fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
              // fontFamily: 'GeistRegular',
              fontSize: 15,
              fontWeight: "600",
              marginBottom: 4,
              lineHeight: 22,
              color: theme.text,
            },
            small && styles.smallTitle,
          ]}
          numberOfLines={2}
        >
          {story.title}
        </AppText>
        <AppText
          style={{
            fontSize: 12,
            color: theme.text,
          }}
        >
          {story.date}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginBottom: 20,
  },
  smallContainer: {
    width: (width - 48) / 2,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  smallImage: {
    height: 120,
  },
  contentContainer: {
    paddingHorizontal: 4,
  },

  smallTitle: {
    fontSize: 14,
    lineHeight: 18,
  },
});
