import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const groceryItems = [
  { id: '1', name: "Fruits & Vegetables", image: require('../../../../assets/samosa.webp') },
  { id: '2', name: "Dairy, Bread & Eggs", image: require('../../../../assets/samosa.webp') },
  { id: '3', name: "Atta, Rice, Oil & Dals", image: require('../../../../assets/samosa.webp') },
  { id: '4', name: "Meat, Fish & Eggs", image: require('../../../../assets/samosa.webp') },
  { id: '5', name: "Masala & Dry Fruits", image: require('../../../../assets/samosa.webp') },
  { id: '6', name: "Breakfast & Sauces", image: require('../../../../assets/samosa.webp') },
  { id: '7', name: "Packaged Food", image: require('../../../../assets/samosa.webp') },
];

export default function GroceryKitchenSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Grocery & Kitchen</Text>
      <FlatList
        data={groceryItems}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
