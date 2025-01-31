import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import MainHeader from '@/components/Main_element/MainHeader';
import BuyAgainSection from '@/components/Home/Comp/BuyAgainSection/BuyAgainSection';
import GroceryKitchenSection from '@/components/Home/Comp/GroceryKitchenSection/GroceryKitchenSection';
import SnacksDrinksSection from '@/components/Home/Comp/SnacksDrinksSection/SnacksDrinksSection';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MainHeader />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <BuyAgainSection />
        <GroceryKitchenSection />
        <SnacksDrinksSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures full height is occupied
  },
  scrollContainer: {
    paddingBottom: 20, // Space at bottom for better scrolling experience
  },
});
