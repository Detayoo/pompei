import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
} from "react-native";
import { useRouter, Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { Image as ExpoImage } from "expo-image";
// import { ChevronRight, ArrowLeft } from "lucide-react-native";

import { FeaturedStory, StoryCard, CategoryRow } from "@/components";
import { featuredStories, categories } from "@/data/cultureData";
// import Colors from "@/constants/colors";

export default function CultureScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const navigateToArticle = (id: string) => {
    router.push(`/culture/article/${id}`);
  };

  const navigateToCategory = (id: string) => {
    router.push(`/culture/category/${id}`);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="dark" /> */}
      <Stack.Screen
        options={{
          title: "CULTURE",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              {/* <ArrowLeft size={20} color={Colors.dark.text} /> */}
            </TouchableOpacity>
          ),
        }}
      />

      {/* Animated header background */}
      <Animated.View
        style={[
          styles.headerBackground,
          {
            opacity: headerOpacity,
          },
        ]}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Featured story */}
        <FeaturedStory
          story={featuredStories[0]}
          onPress={() => navigateToArticle(featuredStories[0].id)}
        />

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryButton}
                onPress={() => navigateToCategory(category.id)}
              >
                <Image
                  source={{ uri: category.imageUrl }}
                  style={styles.categoryImage}
                  // contentFit="cover"
                />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Editor's Picks */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Editor's Picks</Text>
            <TouchableOpacity>
              {/* <ChevronRight size={20} color={Colors.dark.text} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.storiesGrid}>
            {featuredStories.slice(1, 5).map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onPress={() => navigateToArticle(story.id)}
              />
            ))}
          </View>
        </View>

        {/* Latest Stories */}
        <CategoryRow
          title="Latest Stories"
          stories={featuredStories.slice(5, 10)}
          onStoryPress={navigateToArticle}
        />

        {/* Fashion */}
        <CategoryRow
          title="Fashion"
          stories={featuredStories.slice(2, 7)}
          onStoryPress={navigateToArticle}
        />

        {/* Art & Design */}
        <CategoryRow
          title="Art & Design"
          stories={featuredStories.slice(3, 8)}
          onStoryPress={navigateToArticle}
        />

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
  backButton: {
    padding: 8,
    marginLeft: 8,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 22,
    fontWeight: "600",
    // color: Colors.dark.text,
  },
  seeAllText: {
    fontSize: 14,
    // color: Colors.primary,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  categoryButton: {
    marginRight: 12,
    width: 100,
    alignItems: "center",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },
  storiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bottomPadding: {
    height: 80,
  },
});
