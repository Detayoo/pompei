import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { StoryCard } from "@/components";
import { featuredStories, categories } from "@/data/cultureData";
import { useTheme } from "@/contexts";

export default function CategoryScreen() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const category = categories.find((c) => c.id === id) || categories[0];
  const categoryStories = featuredStories.filter(
    (story) => story.category === category.name
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Screen
        options={{
          headerShown: true,
          title: category.name,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color={theme.text} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{category.name}</Text>
        <Text style={styles.headerDescription}>{category.description}</Text>
      </View>

      <FlatList
        data={
          categoryStories.length > 0
            ? categoryStories
            : featuredStories.slice(0, 8)
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <StoryCard
              story={item}
              onPress={() => router.push(`/(dashboard)/culture/article/[id]`)}
            />
          </View>
        )}
        ListFooterComponent={<View style={styles.bottomPadding} />}
      />
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
    marginLeft: -12,
    // backgroundColor: "red",
    // marginLeft: -30,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    // color: Colors.dark.text,
  },
  headerDescription: {
    fontSize: 16,
    lineHeight: 22,
    // color: Colors.dark.textSecondary,
  },
  listContent: {
    padding: 12,
  },
  cardContainer: {
    width: "50%",
    padding: 4,
  },
  bottomPadding: {
    height: 80,
  },
});
