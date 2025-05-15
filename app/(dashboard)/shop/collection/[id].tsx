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
import { StatusBar } from "expo-status-bar";
import { ArrowLeft, Heart } from "lucide-react-native";

import { useTheme } from "@/hooks/useTheme";
import { products, collections } from "@/constants/shopData";

export default function CollectionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const theme = useTheme();
  const [wishlist, setWishlist] = React.useState<string[]>([]);

  const collection = collections.find((c) => c.id === id) || collections[0];
  const collectionProducts = products.filter((product) => 
    collection.products.includes(product.id)
  );

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar style="light" />
      
      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: collection.imageUrl }}
          style={styles.heroImage}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <View style={styles.heroOverlay}>
          <Text style={styles.collectionTitle}>{collection.name}</Text>
          <Text style={styles.collectionDescription}>{collection.description}</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Collection Products</Text>
        
        <View style={styles.productsGrid}>
          {collectionProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => router.push(`/shop/product/${product.id}`)}
              activeOpacity={0.8}
            >
              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: product.imageUrl }}
                  style={styles.productImage}
                />
                <TouchableOpacity 
                  style={[styles.wishlistButton, { backgroundColor: theme.background }]}
                  onPress={() => toggleWishlist(product.id)}
                >
                  <Heart 
                    size={18} 
                    color={wishlist.includes(product.id) ? theme.primary : theme.text} 
                    fill={wishlist.includes(product.id) ? theme.primary : 'none'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={[styles.productBrand, { color: theme.textSecondary }]}>{product.brand}</Text>
              <Text 
                style={[styles.productName, { color: theme.text }]}
                numberOfLines={1}
              >
                {product.name}
              </Text>
              <View style={styles.priceContainer}>
                {product.originalPrice ? (
                  <>
                    <Text style={[styles.salePrice, { color: theme.primary }]}>${product.price}</Text>
                    <Text style={[styles.originalPrice, { color: theme.textSecondary }]}>
                      ${product.originalPrice}
                    </Text>
                  </>
                ) : (
                  <Text style={[styles.price, { color: theme.text }]}>${product.price}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Editorial Content */}
        <View style={styles.editorialContainer}>
          <Text style={[styles.editorialTitle, { color: theme.text }]}>The Story</Text>
          <Text style={[styles.editorialText, { color: theme.textSecondary }]}>
            This collection embodies the essence of modern elegance with a focus on versatile pieces that transition seamlessly from day to night. Each item is thoughtfully designed with attention to detail and crafted from premium materials.
          </Text>
          <Text style={[styles.editorialText, { color: theme.textSecondary, marginTop: 16 }]}>
            Our design team drew inspiration from architectural forms and natural textures, creating a harmonious balance between structure and fluidity. The color palette features rich neutrals punctuated by subtle pops of color.
          </Text>
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