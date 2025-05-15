import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import {
//   ChevronRight,
//   Search,
//   Heart,
//   ShoppingBag as ShoppingBagIcon,
//   ArrowRight
// } from "lucide-react-native";

import { useTheme } from "@/contexts";
import { products, shopCategories, collections } from "@/data/shopData";

const { width } = Dimensions.get("window");
const FEATURED_HEIGHT = 500;
const PRODUCT_CARD_WIDTH = (width - 48) / 2;

export default function ShopScreen() {
  const { theme } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const [wishlist, setWishlist] = useState<string[]>([]);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const navigateToProduct = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  const navigateToCategory = (id: string) => {
    router.push(`/shop/category/${id}`);
  };

  const navigateToCollection = (id: string) => {
    router.push(`/shop/collection/${id}`);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 5);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 6);
  const trendingProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/*   <StatusBar style={theme.background === '#FFFFFF' ? "dark" : "light"} /> */}

      <Animated.View
        style={[
          styles.headerBackground,
          {
            opacity: headerOpacity,
            backgroundColor: theme.background,
          },
        ]}
      />

      <View style={styles.headerButtons}>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: theme.surfaceVariant }]}
        >
          {/* <Search size={20} color={theme.text} /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, { backgroundColor: theme.surfaceVariant }]}
        >
          {/* <ShoppingBagIcon size={20} color={theme.text} /> */}
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.featuredContainer}>
          <Image
            source={{ uri: featuredProducts[0].imageUrl }}
            style={styles.featuredImage}
          />
          <View
            style={[
              styles.featuredOverlay,
              { backgroundColor: "rgba(0,0,0,0.3)" },
            ]}
          >
            <View style={styles.featuredContent}>
              <Text style={styles.featuredLabel}>FEATURED</Text>
              <Text style={styles.featuredTitle}>
                {featuredProducts[0].name}
              </Text>
              <Text style={styles.featuredBrand}>
                {featuredProducts[0].brand}
              </Text>
              <TouchableOpacity
                style={[
                  styles.featuredButton,
                  { backgroundColor: theme.primary },
                ]}
                onPress={() => navigateToProduct(featuredProducts[0].id)}
              >
                <Text style={styles.featuredButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Shop by Category
            </Text>
            <TouchableOpacity>
              {/* <ChevronRight size={20} color={theme.text} /> */}
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {shopCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryButton}
                onPress={() => navigateToCategory(category.id)}
              >
                <View style={styles.categoryImageContainer}>
                  <Image
                    source={{ uri: category.imageUrl }}
                    style={styles.categoryImage}
                  />
                </View>
                <Text style={[styles.categoryName, { color: theme.text }]}>
                  {category.name}
                </Text>
                <Text
                  style={[styles.categoryCount, { color: theme.text }]}
                >
                  {category.productCount} items
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              New Arrivals
            </Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={[styles.viewAllText, { color: theme.primary }]}>
                View All
              </Text>
              {/* <ArrowRight size={16} color={theme.primary} /> */}
            </TouchableOpacity>
          </View>

          <View style={styles.productsGrid}>
            {newArrivals.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => navigateToProduct(product.id)}
                activeOpacity={0.8}
              >
                <View style={styles.productImageContainer}>
                  <Image
                    source={{ uri: product.imageUrl }}
                    style={styles.productImage}
                  />
                  <TouchableOpacity
                    style={[
                      styles.wishlistButton,
                      { backgroundColor: theme.background },
                    ]}
                    onPress={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      size={18}
                      color={
                        wishlist.includes(product.id)
                          ? theme.primary
                          : theme.text
                      }
                      fill={
                        wishlist.includes(product.id) ? theme.primary : "none"
                      }
                    />
                  </TouchableOpacity>
                  {product.isNew && (
                    <View
                      style={[
                        styles.newBadge,
                        { backgroundColor: theme.primary },
                      ]}
                    >
                      <Text style={styles.newBadgeText}>NEW</Text>
                    </View>
                  )}
                </View>
                <Text
                  style={[styles.productBrand, { color: theme.textSecondary }]}
                >
                  {product.brand}
                </Text>
                <Text
                  style={[styles.productName, { color: theme.text }]}
                  numberOfLines={1}
                >
                  {product.name}
                </Text>
                <View style={styles.priceContainer}>
                  {product.originalPrice ? (
                    <>
                      <Text
                        style={[styles.salePrice, { color: theme.primary }]}
                      >
                        ${product.price}
                      </Text>
                      <Text
                        style={[
                          styles.originalPrice,
                          { color: theme.text },
                        ]}
                      >
                        ${product.originalPrice}
                      </Text>
                    </>
                  ) : (
                    <Text style={[styles.price, { color: theme.text }]}>
                      ${product.price}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Collections */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Collections
            </Text>
            <TouchableOpacity>
              {/* <ChevronRight size={20} color={theme.text} /> */}
            </TouchableOpacity>
          </View>

          {collections.map((collection) => (
            <TouchableOpacity
              key={collection.id}
              style={styles.collectionCard}
              onPress={() => navigateToCollection(collection.id)}
              activeOpacity={0.9}
            >
              <Image
                source={{ uri: collection.imageUrl }}
                style={styles.collectionImage}
              />
              <View style={styles.collectionOverlay}>
                <Text style={styles.collectionTitle}>{collection.name}</Text>
                <Text style={styles.collectionDescription}>
                  {collection.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Trending Now */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Trending Now
            </Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={[styles.viewAllText, { color: theme.primary }]}>
                View All
              </Text>
              {/* <ArrowRight size={16} color={theme.primary} /> */}
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingContainer}
          >
            {trendingProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.trendingCard}
                onPress={() => navigateToProduct(product.id)}
                activeOpacity={0.8}
              >
                <View style={styles.trendingImageContainer}>
                  <Image
                    source={{ uri: product.imageUrl }}
                    style={styles.trendingImage}
                  />
                  <TouchableOpacity
                    style={[
                      styles.wishlistButton,
                      { backgroundColor: theme.background },
                    ]}
                    onPress={() => toggleWishlist(product.id)}
                  >
                    {/* <Heart
                      size={18}
                      color={
                        wishlist.includes(product.id)
                          ? theme.primary
                          : theme.text
                      }
                      fill={
                        wishlist.includes(product.id) ? theme.primary : "none"
                      }
                    /> */}
                  </TouchableOpacity>
                </View>
                <Text
                  style={[styles.productBrand, { color: theme.text }]}
                >
                  {product.brand}
                </Text>
                <Text
                  style={[styles.productName, { color: theme.text }]}
                  numberOfLines={1}
                >
                  {product.name}
                </Text>
                <Text style={[styles.price, { color: theme.text }]}>
                  ${product.price}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Editorial */}
        <View style={styles.editorialContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            }}
            style={styles.editorialImage}
          />
          <View style={styles.editorialContent}>
            <Text style={styles.editorialTitle}>THE EDIT</Text>
            <Text style={styles.editorialSubtitle}>Summer Style Guide</Text>
            <Text style={styles.editorialDescription}>
              Discover this season's essential pieces and how to style them for
              any occasion.
            </Text>
            <TouchableOpacity
              style={[styles.editorialButton, { borderColor: theme.text }]}
            >
              <Text style={[styles.editorialButtonText, { color: theme.text }]}>
                Read More
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  },
  headerButtons: {
    position: "absolute",
    top: 50,
    right: 16,
    flexDirection: "row",
    zIndex: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  featuredContainer: {
    height: FEATURED_HEIGHT,
    width: "100%",
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  featuredContent: {
    padding: 20,
  },
  featuredLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
    letterSpacing: 1,
  },
  featuredTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  featuredBrand: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 16,
  },
  featuredButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  featuredButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
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
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 14,
    marginRight: 4,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  categoryButton: {
    marginRight: 16,
    width: 100,
    alignItems: "center",
  },
  categoryImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 8,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  categoryCount: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: PRODUCT_CARD_WIDTH,
    marginBottom: 24,
  },
  productImageContainer: {
    width: "100%",
    height: 200,
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
  collectionCard: {
    height: 180,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
  },
  collectionImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  collectionOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 16,
    justifyContent: "center",
  },
  collectionTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  collectionDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    maxWidth: "80%",
  },
  trendingContainer: {
    paddingRight: 16,
  },
  trendingCard: {
    width: 160,
    marginRight: 16,
  },
  trendingImageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
    position: "relative",
  },
  trendingImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  editorialContainer: {
    marginTop: 40,
    position: "relative",
  },
  editorialImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  editorialContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  editorialTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
    letterSpacing: 2,
  },
  editorialSubtitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  editorialDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 24,
    textAlign: "center",
    maxWidth: "80%",
  },
  editorialButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 4,
  },
  editorialButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  bottomPadding: {
    height: 80,
  },
});
