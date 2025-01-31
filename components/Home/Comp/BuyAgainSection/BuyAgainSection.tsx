import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const products = [
  {
    id: '1',
    name: "Amul Gold Full Cream Milk",
    weight: "1L",
    price: "₹67",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  { 
    id: '2',
    name: "Amul Salted Butter",
    weight: "100 g",
    price: "₹60",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  {
    id: '3',
    name: "Fortune Kachi Ghani Mustard Oil",
    weight: "1L",
    price: "₹158",
    oldPrice: "₹195",
    discount: "₹37 off",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  {
    id: '4',
    name: "Amul Masti Dahi Pouch",
    weight: "400 g",
    price: "₹35",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  {
    id: '5',
    name: "Kurkure Masala Munch",
    weight: "78 g",
    price: "₹20",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  {
    id: '6',
    name: "Kurkure Masala Munch",
    weight: "78 g",
    price: "₹20",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
  {
    id: '7',
    name: "Kurkure Masala Munch",
    weight: "78 g",
    price: "₹20",
    image: require('../../../../assets/samosa.webp'),
    deliveryTime: "6 Mins",
  },
];

export default function BuyAgainSection() {
  const router = useRouter();

  const handleProductClick = () => {
    router.push({
      pathname: '/productdetails',
      query: { 
        name: "Samosa",
        weight: "1kg",
        price: "67",
        image: "https://via.placeholder.com/300"
      }
    });
    
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Buy <Text style={styles.highlight}>Again</Text>
      </Text>

      <FlatList
        data={products}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductClick()} style={styles.productCard}>
            <View style={styles.priceTag}>
              <Text style={styles.price}>{item.price}</Text>
              {item.oldPrice && (
                <Text style={styles.oldPrice}>MRP {item.oldPrice}</Text>
              )}
            </View>
            <Image source={item.image} style={styles.productImage} />
            {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
            <Text style={styles.deliveryTime}>
              <Ionicons name="time-outline" size={14} color="gray" /> {item.deliveryTime}
            </Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.weight}>{item.weight}</Text>
            <TouchableOpacity style={styles.addToCartBtn}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: 'purple',
    textDecorationLine: 'underline',
  },
  productCard: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    backgroundColor: '#ff3d3d',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 16,
  },
  oldPrice: {
    marginLeft: 5,
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 14,
  },
  discount: {
    position: 'absolute',
    right: 10,
    top: 60,
    backgroundColor: 'green',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  deliveryTime: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  productName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 3,
  },
  weight: {
    color: 'gray',
    fontSize: 12,
  },
  addToCartBtn: {
    marginTop: 8,
    backgroundColor: '#ff3d3d',
    paddingVertical: 8,
    width: '100%',
    borderRadius: 5,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
