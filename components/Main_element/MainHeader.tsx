import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginModal from '../Forms/Login/Login';

export default function MainHeader() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const toggleLoginModal = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleLoginModal}>
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.deliveryText}>
            Amrit Feed Pvt At <Text style={{ fontWeight: 'bold', color: 'orange' }}>Bejiness</Text>
          </Text>
          <Text style={styles.subText}>Buyer</Text>
        </View>
        <View style={styles.cashBadge}>
          <Text style={styles.cashText}>₹125</Text>
          <Text style={styles.freeCash}>FREE CASH</Text>
        </View>
      </View>

      {/* Fixed Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder='Search for "milk"' style={styles.searchInput} />
      </View>

      {/* Login Modal */}
      <LoginModal isVisible={isLoginVisible} onClose={toggleLoginModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f0f5f3',
  },
  headerTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
  cashBadge: {
    backgroundColor: '#8a2be2',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  cashText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  freeCash: {
    fontSize: 10,
    color: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});