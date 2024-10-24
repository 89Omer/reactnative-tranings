import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

export default function layouts() {
  // State to handle dark/light theme toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView
      style={[
        styles.container, 
        { backgroundColor: isDarkMode ? '#000' : '#fff' } // Change background based on theme
      ]}
      contentContainerStyle={{ flexGrow: 1 }} // Ensures footer moves to bottom
    >
      {/* Theme Toggle */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: isDarkMode ? '#fff' : '#000' }]}>
          My App
        </Text>
        <View style={styles.themeToggle}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
          Welcome to My App
        </Text>
        <Text style={[styles.bodyText, { color: isDarkMode ? '#fff' : '#000' }]}>
          This is an example layout combining Flexbox, positioning, and padding.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: isDarkMode ? '#fff' : '#000' }]}>
          Footer Section
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the scroll view takes up the entire screen
    padding: 20, // Add some padding

  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  themeToggle: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    flex: 1, // This will ensure the content stretches and the footer is pushed to the bottom
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center', // Align text in the center of the screen
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center', // Align body text in the center
  },
  footer: {
    backgroundColor: '#333', // Fixed background color for the footer
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});
