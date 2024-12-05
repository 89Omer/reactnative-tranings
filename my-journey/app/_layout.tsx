import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');
        setIsFirstLaunch(hasCompletedOnboarding !== 'true');
      } catch (error) {
        console.error('Error checking onboarding status', error);
        setIsFirstLaunch(true);
      }
    };

    checkOnboardingStatus();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Or a loading screen
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isFirstLaunch ? (
        <Stack.Screen name="onboarding/screen1" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
     
    </Stack>
  );
}