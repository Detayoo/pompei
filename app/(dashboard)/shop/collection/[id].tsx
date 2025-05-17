import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { useTheme } from "@/contexts";
import { products, collections } from "@/data/shopData";
import { AppText } from "@/components";

export default function CollectionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const [wishlist, setWishlist] = React.useState<string[]>([]);

  const collection = collections.find((c) => c.id === id) || collections[0];
  const collectionProducts = products.filter((product) =>
    collection.products.includes(product.id)
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
      {/* <StatusBar style="light" /> */}

      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image source={{ uri: collection.imageUrl }} style={styles.heroImage} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          {/* <ArrowLeft size={24} color="#FFFFFF" /> */}
        </TouchableOpacity>

        <View style={styles.heroOverlay}>
          <AppText style={styles.collectionTitle}>{collection.name}</AppText>
          <AppText style={styles.collectionDescription}>
            {collection.description}
          </AppText>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppText style={styles.sectionTitle}>Collection Products</AppText>

        <View style={styles.productsGrid}>
          {collectionProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => router.push(`/shop/product/[id]`)}
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
                  {/* <Heart 
                    size={18} 
                    color={wishlist.includes(product.id) ? theme.buttonBg : theme.text} 
                    fill={wishlist.includes(product.id) ? theme.buttonBg : 'none'}
                  /> */}
                </TouchableOpacity>
              </View>
              <AppText style={[styles.productBrand]}>{product.brand}</AppText>
              <AppText style={[styles.productName]} numberOfLines={1}>
                {product.name}
              </AppText>
              <View style={styles.priceContainer}>
                {product.originalPrice ? (
                  <>
                    <AppText
                      style={[styles.salePrice, { color: theme.buttonBg }]}
                    >
                      ${product.price}
                    </AppText>
                    <AppText style={[styles.originalPrice]}>
                      ${product.originalPrice}
                    </AppText>
                  </>
                ) : (
                  <AppText style={[styles.price]}>${product.price}</AppText>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Editorial Content */}
        <View style={styles.editorialContainer}>
          <AppText style={[styles.editorialTitle]}>The Story</AppText>
          <AppText style={[styles.editorialText]}>
            This collection embodies the essence of modern elegance with a focus
            on versatile pieces that transition seamlessly from day to night.
            Each item is thoughtfully designed with attention to detail and
            crafted from premium materials.
          </AppText>
          <AppText
            style={[styles.editorialText, { color: theme.text, marginTop: 16 }]}
          >
            Our design team drew inspiration from architectural forms and
            natural textures, creating a harmonious balance between structure
            and fluidity. The color palette features rich neutrals punctuated by
            subtle pops of color.
          </AppText>
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
  heroContainer: {
    height: 300,
    width: "100%",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  collectionTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  collectionDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 24,
  },
  productImageContainer: {
    width: "100%",
    aspectRatio: 1,
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
  editorialContainer: {
    marginTop: 30,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  editorialTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
  },
  editorialText: {
    fontSize: 16,
    lineHeight: 24,
  },
  bottomPadding: {
    height: 80,
  },
});
