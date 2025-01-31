import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productOriginalPrice}>{product.originalPrice}</Text>
      <Text style={styles.productDiscount}>{product.discount}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const SnacksDrinksSection = () => {
  const products = [
    {
      id: 1,
      name: 'Amul Gold Full Cream Fresh Milk',
      price: '$67',
      originalPrice: 'MRP 1195',
      discount: '$37 off',
      image: '../../../../assets/samosa.webp',
    },
    {
      id: 2,
      name: 'Amul Salted Butter',
      price: '$60',
      originalPrice: 'MRP 1195',
      discount: '$37 off',
      image: '../../../../assets/samosa.webp',
    },
    // Add more products as needed
  ];

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  productOriginalPrice: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  productDiscount: {
    fontSize: 12,
    color: 'red',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SnacksDrinksSection;