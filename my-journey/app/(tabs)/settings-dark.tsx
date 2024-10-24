import React, { useState } from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Switch } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function Settings() {
  // States for toggling different settings
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} // Dynamic background color for light/dark themes
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')} // Custom header image
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>

      {/* Step 1: Notifications */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Enable Notifications</ThemedText>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />
      </ThemedView>

      {/* Step 2: Dark Mode */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Enable Dark Mode</ThemedText>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={setIsDarkModeEnabled}
        />
      </ThemedView>

      {/* Step 3: Developer Tools */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/settings/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titleContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
