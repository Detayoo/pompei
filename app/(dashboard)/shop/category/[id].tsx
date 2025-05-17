import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { ArrowLeft, Filter, Heart } from "lucide-react-native";

import { useTheme } from "@/contexts";
import { products, shopCategories } from "@/data/shopData";
import { Ionicons } from "@expo/vector-icons";
import { AppText } from "@/components";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const [wishlist, setWishlist] = React.useState<string[]>([]);

  const category = shopCategories.find((c) => c.id === id) || shopCategories[0];
  const categoryProducts = products.filter(
    (product) => product.category === category.id
  );

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* <StatusBar style={theme.background === '#FFFFFF' ? "dark" : "light"} /> */}

      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.background,
            borderBottomColor: theme.border,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          {/* <ArrowLeft size={20} color={theme.text} /> */}
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>

        <AppText style={[styles.headerTitle]}>{category.name}</AppText>

        <TouchableOpacity
          style={[styles.filterButton, { backgroundColor: theme.secondary }]}
        >
          {/* <Filter size={20} color={theme.text} /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.resultsHeader}>
        <AppText style={[styles.resultsCount]}>
          {categoryProducts.length} products
        </AppText>
        <TouchableOpacity>
          <AppText style={[styles.sortButton, { color: theme.buttonBg }]}>
            Sort
          </AppText>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categoryProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => router.push(`/shop/product/[id]`)}
            activeOpacity={0.8}
          >
            <View style={styles.productImageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.productImage}
              />
              <TouchableOpacity
                style={[
                  styles.wishlistButton,
                  { backgroundColor: theme.background },
                ]}
                onPress={() => toggleWishlist(item.id)}
              >
                {/* <Heart
                  size={18}
                  color={
                    wishlist.includes(item.id) ? theme.buttonBg : theme.text
                  }
                  fill={wishlist.includes(item.id) ? theme.buttonBg : "none"}
                /> */}
              </TouchableOpacity>
              {item.isNew && (
                <View
                  style={[styles.newBadge, { backgroundColor: theme.buttonBg }]}
                >
                  <AppText style={styles.newBadgeText}>NEW</AppText>
                </View>
              )}
              {item.discount && (
                <View
                  style={[styles.saleBadge, { backgroundColor: theme.text }]}
                >
                  <AppText style={styles.newBadgeText}>
                    {item.discount}% OFF
                  </AppText>
                </View>
              )}
            </View>
            <AppText style={[styles.productBrand]}>{item.brand}</AppText>
            <AppText style={[styles.productName]} numberOfLines={1}>
              {item.name}
            </AppText>
            <View style={styles.priceContainer}>
              {item.originalPrice ? (
                <>
                  <AppText
                    style={[styles.salePrice, { color: theme.buttonBg }]}
                  >
                    ${item.price}
                  </AppText>
                  <AppText style={[styles.originalPrice]}>
                    ${item.originalPrice}
                  </AppText>
                </>
              ) : (
                <AppText style={[styles.price]}>${item.price}</AppText>
              )}
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={styles.bottomPadding} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 30,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 20,
    fontWeight: "600",
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resultsCount: {
    fontSize: 14,
  },
  sortButton: {
    fontSize: 14,
    fontWeight: "500",
  },
  listContent: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
  },
  productImageContainer: {
    width: "100%",
    aspectRatio: 0.8,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  wishlistButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  newBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  saleBadge: {
    position: "absolute",
    top: 40,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
  productBrand: {
    fontSize: 12,
    marginBottom: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  },
  salePrice: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 6,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  bottomPadding: {
    height: 80,
  },
});
