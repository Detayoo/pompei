import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
// import { ChevronRight } from "lucide-react-native";

import { StoryCard } from "./StoryCard";
import { Story } from "@/types";
// import Colors from "@/constants/colors";

interface CategoryRowProps {
  title: string;
  stories: Story[];
  onStoryPress: (id: string) => void;
}

export function CategoryRow({
  title,
  stories,
  onStoryPress,
}: CategoryRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          {/* <ChevronRight size={20} color={Colors.dark.text} /> */}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story) => (
          <View key={story.id} style={styles.cardContainer}>
            <StoryCard story={story} onPress={() => onStoryPress(story.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 22,
    fontWeight: "600",
  },
  scrollContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  cardContainer: {
    marginRight: 16,
    width: 200,
  },
});
