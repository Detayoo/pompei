import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import { FeaturedStory, StoryCard, CategoryRow, AppText } from "@/components";
import { featuredStories, categories } from "@/data/cultureData";
import { useTheme } from "@/contexts";

export default function CultureScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const { theme } = useTheme();

  const [sound, setSound] = useState<any>();
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const interval = useRef<any>(null);

  const loadAndPlay = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/anthropic-prompt-engineering.mp3"),
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

  // const seconds = Math.floor(((duration - position) % 60000) / 1000);
  // const refinedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  // const minute = Math.floor(((duration - position) % 3600000) / 60000);
  // const refinedMinute = minute < 10 ? `0${minute}` : minute;
  // const hour = Math.floor((duration - position) / 3600000);
  // const refinedHour = hour < 10 ? `0${hour}` : hour;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const navigateToArticle = (id: string) => {
    router.push(`/culture/article/${id}`);
  };

  const navigateToCategory = (id: string) =>
    router.push(`/culture/category/${id}`);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Screen
        options={{
          title: "CULTURE",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={20} color={theme.text} />
            </TouchableOpacity>
          ),
        }}
      />

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
        <FeaturedStory
          story={featuredStories[1]}
          onPress={() => navigateToArticle(featuredStories[0].id)}
        />

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            {/* <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity> */}
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
                  source={{ uri: category?.imageUrl }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Editor's Picks</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" color={theme.text} size={20} />
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

        <CategoryRow
          title="Latest Stories"
          stories={featuredStories.slice(5, 10)}
          onStoryPress={navigateToArticle}
        />

        <CategoryRow
          title="Fashion"
          stories={featuredStories.slice(2, 7)}
          onStoryPress={navigateToArticle}
        />

        <CategoryRow
          title="Art & Design"
          stories={featuredStories.slice(3, 8)}
          onStoryPress={navigateToArticle}
        />

        <View style={styles.bottomPadding} />
      </ScrollView>
      {/* <Pressable
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          backgroundColor: theme.background,
          paddingTop: 10,
          paddingHorizontal: 16,
        }}
      >
        <AppText
          style={{ fontFamily: "Georgia", fontWeight: 600, marginBottom: 10 }}
        >
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
            source={require("../../../assets/images/square.webp")}
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
      </Pressable> */}
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
    fontFamily: "GeistMedium",
    fontSize: 22,
    // fontWeight: "600",
    // color: Colors.dark.text,
  },
  seeAllText: {
    fontSize: 14,
    // color: Colors.buttonBg,
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
    fontFamily: "Geist",
  },
  storiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bottomPadding: {
    height: 120,
  },
});
