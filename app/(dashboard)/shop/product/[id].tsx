import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import {
//   ArrowLeft,
//   Heart,
//   Share2,
//   Star,
//   Plus,
//   Minus,
//   ShoppingBag
// } from "lucide-react-native";

import { useTheme } from "@/contexts";
import { products } from "@/data/shopData";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const scrollRef = useRef<ScrollView>(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((p) => p.id === id) || products[0];
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Ionicons
          name="star"
          key={i}
          size={16}
          color={theme.text}
          fill={i < Math.floor(rating) ? theme.text : "none"}
        />
      ));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* <StatusBar style={theme.background === '#FFFFFF' ? "dark" : "light"} /> */}

      {/* Back button */}
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: theme.text }]}
        onPress={() => router.back()}
      >
        {/* <ArrowLeft size={20} color={theme.text} /> */}
      </TouchableOpacity>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <FlatList
            data={product.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(
                e.nativeEvent.contentOffset.x / width
              );
              setActiveImageIndex(newIndex);
            }}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.productImage} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />

          {/* Image pagination dots */}
          <View style={styles.paginationContainer}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  {
                    backgroundColor:
                      index === activeImageIndex
                        ? theme.buttonBg
                        : theme.border,
                    width: index === activeImageIndex ? 20 : 8,
                  },
                ]}
              />
            ))}
          </View>

          {/* Badges */}
          <View style={styles.badgesContainer}>
            {product.isNew && (
              <View style={[styles.badge, { backgroundColor: theme.buttonBg }]}>
                <Text style={styles.badgeText}>NEW</Text>
              </View>
            )}
            {product.discount && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: theme.buttonBg,
                    marginTop: product.isNew ? 8 : 0,
                  },
                ]}
              >
                <Text style={styles.badgeText}>{product.discount}% OFF</Text>
              </View>
            )}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <View style={styles.brandRow}>
            <Text style={[styles.brand, { color: theme.faintText }]}>
              {product.brand}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: theme.text }]}
                onPress={toggleWishlist}
              >
                {/* <Heart 
                  size={20} 
                  color={isWishlisted ? theme.buttonBg : theme.text} 
                  fill={isWishlisted ? theme.buttonBg : 'none'} 
                /> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  { backgroundColor: theme.faintText },
                ]}
              >
                {/* <Share2 size={20} color={theme.text} /> */}
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.productName, { color: theme.text }]}>
            {product.name}
          </Text>

          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {renderStars(product.rating)}
            </View>
            <Text style={[styles.reviewCount, { color: theme.text }]}>
              {product.rating} ({product.reviewCount} reviews)
            </Text>
          </View>

          <View style={styles.priceContainer}>
            {product.originalPrice ? (
              <>
                <Text style={[styles.salePrice, { color: theme.buttonBg }]}>
                  ${product.price}
                </Text>
                <Text style={[styles.originalPrice, { color: theme.text }]}>
                  ${product.originalPrice}
                </Text>
              </>
            ) : (
              <Text style={[styles.price, { color: theme.text }]}>
                ${product.price}
              </Text>
            )}
          </View>

          {/* Sizes */}
          {product.sizes && (
            <View style={styles.optionsContainer}>
              <Text style={[styles.optionTitle, { color: theme.text }]}>
                Size
              </Text>
              <View style={styles.optionsGrid}>
                {product.sizes.map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.sizeButton,
                      {
                        backgroundColor:
                          selectedSize === size
                            ? theme.buttonBg
                            : theme.surfaceVariant,
                        borderColor:
                          selectedSize === size ? theme.buttonBg : theme.border,
                      },
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        {
                          color: selectedSize === size ? "#FFFFFF" : theme.text,
                        },
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Colors */}
          {product.colors && (
            <View style={styles.optionsContainer}>
              <Text style={[styles.optionTitle, { color: theme.text }]}>
                Color
              </Text>
              <View style={styles.optionsGrid}>
                {product.colors.map((color) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorButton,
                      {
                        borderColor:
                          selectedColor === color
                            ? theme.buttonBg
                            : theme.border,
                      },
                    ]}
                    onPress={() => setSelectedColor(color)}
                  >
                    <Text style={[styles.colorText, { color: theme.text }]}>
                      {color}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <Text style={[styles.optionTitle, { color: theme.text }]}>
              Quantity
            </Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={[styles.quantityButton, { backgroundColor: theme.text }]}
                onPress={decrementQuantity}
                disabled={quantity <= 1}
              >
                {/* <Minus size={16} color={quantity <= 1 ? theme.faintText : theme.text} /> */}
              </TouchableOpacity>
              <Text style={[styles.quantityText, { color: theme.text }]}>
                {quantity}
              </Text>
              <TouchableOpacity
                style={[
                  styles.quantityButton,
                  { backgroundColor: theme.faintText },
                ]}
                onPress={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                {/* <Plus size={16} color={quantity >= product.stock ? theme.faintText : theme.text} /> */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={[styles.descriptionTitle, { color: theme.text }]}>
              Description
            </Text>
            <Text style={[styles.descriptionText, { color: theme.text }]}>
              {product.description}
            </Text>
          </View>

          {/* Related Products */}
          <View style={styles.relatedContainer}>
            <Text style={[styles.relatedTitle, { color: theme.text }]}>
              You May Also Like
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.relatedProductsContainer}
            >
              {relatedProducts.map((relatedProduct) => (
                <TouchableOpacity
                  key={relatedProduct.id}
                  style={styles.relatedProductCard}
                  onPress={() => {
                    router.push(`/shop/product/[id]`);
                    // Reset scroll position when navigating to a new product
                    if (scrollRef.current) {
                      scrollRef.current.scrollTo({ y: 0, animated: false });
                    }
                  }}
                >
                  <View style={styles.relatedProductImageContainer}>
                    <Image
                      source={{ uri: relatedProduct.imageUrl }}
                      style={styles.relatedProductImage}
                    />
                  </View>
                  <Text
                    style={[styles.relatedProductName, { color: theme.text }]}
                    numberOfLines={1}
                  >
                    {relatedProduct.name}
                  </Text>
                  <Text
                    style={[
                      styles.relatedProductPrice,
                      { color: theme.faintText },
                    ]}
                  >
                    ${relatedProduct.price}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Bottom padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Add to Cart Button */}
      <View
        style={[
          styles.addToCartContainer,
          { backgroundColor: theme.background, borderTopColor: theme.border },
        ]}
      >
        <TouchableOpacity
          style={[styles.addToCartButton, { backgroundColor: theme.buttonBg }]}
        >
          {/* <ShoppingBag size={20} color="#FFFFFF" /> */}
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  imageContainer: {
    width: width,
    height: width * 1.2,
    position: "relative",
  },
  productImage: {
    width: width,
    height: width * 1.2,
    resizeMode: "cover",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  badgesContainer: {
    position: "absolute",
    top: 20,
    left: 16,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  infoContainer: {
    padding: 20,
  },
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  productName: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
  },
  salePrice: {
    fontSize: 24,
    fontWeight: "700",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sizeButton: {
    width: 60,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "500",
  },
  colorButton: {
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
  colorText: {
    fontSize: 14,
  },
  quantityContainer: {
    marginBottom: 24,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 16,
    minWidth: 30,
    textAlign: "center",
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
  },
  relatedContainer: {
    marginTop: 10,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
  },
  relatedProductsContainer: {
    paddingRight: 20,
  },
  relatedProductCard: {
    width: 140,
    marginRight: 16,
  },
  relatedProductImageContainer: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  relatedProductImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  relatedProductName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  relatedProductPrice: {
    fontSize: 14,
  },
  bottomPadding: {
    height: 80,
  },
  addToCartContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
  },
  addToCartButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  addToCartText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
