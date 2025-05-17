import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  StatusBar,
  Alert,
  Share,
} from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { AppText, StoryCard } from "@/components";
import { featuredStories } from "@/data/cultureData";
import { useTheme } from "@/contexts";

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const { theme } = useTheme();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const story = featuredStories.find((s) => s.id === id) || featuredStories[0];
  const relatedStories = featuredStories.filter((s) => s.id !== id).slice(0, 4);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [id]);

  const url = Linking.createURL(`culture/article/${id}`);

  const onShare = async () => {
    try {
      await Share.share({
        message: `Read with me: ${url}`,
        url,
        title: "Read with me",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.heroContainer}>
          <Image source={{ uri: story.imageUrl }} style={styles.heroImage} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color={theme.background} />
          </TouchableOpacity>

          <View style={styles.heroGradient} />

          <View style={styles.categoryPill}>
            <AppText style={styles.categoryText}>{story.category}</AppText>
          </View>
        </View>

        <View style={styles.articleContainer}>
          <AppText style={styles.title}>{story.title}</AppText>

          <View style={styles.authorRow}>
            <Image
              source={{ uri: story.author.avatar }}
              style={styles.authorAvatar}
            />
            <View>
              <AppText style={styles.authorName}>{story.author.name}</AppText>
              <AppText style={styles.publishDate}>{story.date}</AppText>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              onPress={() => setLiked(!liked)}
              style={styles.actionButton}
            >
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={20}
                color={theme.text}
              />
              <AppText style={styles.actionText}>2.5K</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare} style={styles.actionButton}>
              <Ionicons name="share-outline" size={20} color={theme.text} />
              <AppText style={styles.actionText}>Share</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(saved ? "Unsaved!" : "Saved!");
                setSaved(!saved);
              }}
              style={styles.actionButton}
            >
              <Ionicons
                name={saved ? "bookmark" : "bookmark-outline"}
                size={20}
                color={theme.text}
              />
              <AppText style={styles.actionText}>Save</AppText>
            </TouchableOpacity>
          </View>

          <AppText style={styles.content}>{story.content}</AppText>

          <View style={styles.relatedContainer}>
            <AppText style={styles.relatedTitle}>Related Stories</AppText>
            <View style={styles.relatedGrid}>
              {relatedStories.map((relatedStory: any) => (
                <StoryCard
                  key={relatedStory.id}
                  story={relatedStory}
                  onPress={() => router.push(`/culture/article/[id]`)}
                  small
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  heroContainer: {
    height: 400,
    width: "100%",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  categoryPill: {
    position: "absolute",
    bottom: 20,
    left: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    // backgroundColor: Colors.buttonBg,
    borderRadius: 20,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  articleContainer: {
    padding: 20,
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom: 16,
    // color: Colors.dark.text,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    objectFit: "cover",
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
  },
  publishDate: {
    fontSize: 14,
    // color: Colors.dark.textSecondary,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    // color: Colors.dark.textSecondary,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    // color: Colors.dark.text,
    marginBottom: 30,
  },
  relatedContainer: {
    marginTop: 20,
  },
  relatedTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    // color: Colors.dark.text,
  },
  relatedGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bottomPadding: {
    height: 80,
  },
});
