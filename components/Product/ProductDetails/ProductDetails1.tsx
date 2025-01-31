import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetails1() {
  const { name = "Samosa", weight = "5 Pic", price = "₹67", oldPrice = "₹80", rating = "4.7", reviews = "33.7k", deliveryTime = "6 mins", image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={image ? { uri: image } : require("../../../assets/samosa.webp")}
          style={styles.productImage}
        />
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productWeight}>{weight}</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.ratingBox}>
            <Ionicons name="star" size={16} color="white" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <Text style={styles.reviews}>({reviews})</Text>
        </View>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>{price}</Text>
          <Text style={styles.originalPrice}>{oldPrice}</Text>
        </View>

        {/* Delivery Time */}
        <View style={styles.deliveryContainer}>
          <Ionicons name="flash-outline" size={20} color="green" />
          <Text style={styles.deliveryText}> Estimated Delivery Time: <Text style={styles.deliveryTime}>{deliveryTime}</Text></Text>
        </View>

        {/* Offer Section */}
        <View style={styles.offerContainer}>
          <Text style={styles.offerText}>Save ₹199 with Bejiness</Text>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>SUPER SAVER</Text>
          </View>
        </View>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartBtn}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 30,
    padding: 10,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productWeight: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingBox: {
    flexDirection: "row",
    backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  ratingText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  reviews: {
    marginLeft: 10,
    fontSize: 14,
    color: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  discountedPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "gray",
    backgroundColor: "yellow",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  deliveryText: {
    fontSize: 16,
    color: "gray",
  },
  deliveryTime: {
    fontWeight: "bold",
    color: "green",
  },
  offerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  offerText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  offerBadge: {
    backgroundColor: "yellow",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  offerBadgeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addToCartBtn: {
    backgroundColor: "#d61c4e",
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
