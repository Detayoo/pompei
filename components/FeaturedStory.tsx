import React from "react";
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
import { LinearGradient } from "expo-linear-gradient";

import { Story } from "@/types/culture";
import { AppText } from "./AppText";

const { width } = Dimensions.get("window");

interface FeaturedStoryProps {
  story: Story;
  onPress: () => void;
}

export function FeaturedStory({ story, onPress }: FeaturedStoryProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: story.imageUrl }}
        style={styles.image}
        // contentFit="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      />
      <View style={styles.contentContainer}>
        <View style={styles.categoryPill}>
          <AppText style={styles.categoryText}>{story.category}</AppText>
        </View>
        <AppText style={styles.title}>{story.title}</AppText>
        <View style={styles.authorRow}>
          <Image
            source={{ uri: story.author.avatar }}
            style={styles.authorAvatar}
            // contentFit="cover"
          />
          <AppText style={styles.authorName}>{story.author.name}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 500,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  categoryPill: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#E91E63",
    borderRadius: 20,
    marginBottom: 12,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
    lineHeight: 34,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  authorName: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});
