import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
// import { Image as ExpoImage } from "expo-image";
// import { StatusBar } from "expo-status-bar";
// import { ArrowLeft, Heart, Share2, Bookmark } from "lucide-react-native";

import { StoryCard } from "@/components";
import { featuredStories } from "@/data/cultureData";
import { useTheme } from "@/contexts";
// import Colors from "@/constants/colors";

const { width } = Dimensions.get("window");

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const { theme } = useTheme();

  const story = featuredStories.find((s) => s.id === id) || featuredStories[0];
  const relatedStories = featuredStories.filter((s) => s.id !== id).slice(0, 4);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [id]);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="light" /> */}
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
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: story.imageUrl }}
            style={styles.heroImage}
            // contentFit="cover"
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            {/* <ArrowLeft size={24} color="#FFFFFF" /> */}
          </TouchableOpacity>

          <View style={styles.heroGradient} />

          <View style={styles.categoryPill}>
            <Text style={styles.categoryText}>{story.category}</Text>
          </View>
        </View>

        {/* Article Content */}
        <View style={styles.articleContainer}>
          <Text style={styles.title}>{story.title}</Text>

          <View style={styles.authorRow}>
            <Image
              source={{ uri: story.author.avatar }}
              style={styles.authorAvatar}
              //   contentFit="cover"
            />
            <View>
              <Text style={styles.authorName}>{story.author.name}</Text>
              <Text style={styles.publishDate}>{story.date}</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              {/* <Heart size={20} color={theme.text} /> */}
              <Text style={styles.actionText}>2.5K</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              {/* <Share2 size={20} color={Colors.dark.text} /> */}
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              {/* <Bookmark size={20} color={Colors.dark.text} /> */}
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.content}>{story.content}</Text>

          {/* Related Stories */}
          <View style={styles.relatedContainer}>
            <Text style={styles.relatedTitle}>Related Stories</Text>
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

        {/* Bottom padding for podcast player */}
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
    // backgroundColor: Colors.primary,
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
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
    // color: Colors.dark.text,
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
