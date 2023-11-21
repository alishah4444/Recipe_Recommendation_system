import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Help component
export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.description}>
        Welcome to the Recipe Recommendation App! If you have any questions or need assistance, check out the information below.
      </Text>
      
      <Text style={styles.sectionTitle}>How to use the app:</Text>
      <Text style={styles.content}>
        1. Browse through the recipes by selecting the "Recipes" tab.
        {"\n"}2. Use the search feature to find specific recipes.
        {"\n"}3. Save your favorite recipes for quick access.
      </Text>

      <Text style={styles.sectionTitle}>Contact us:</Text>
      <Text style={styles.content}>
        If you encounter any issues or have suggestions, feel free to reach out to our support team at support@example.com.
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
});

