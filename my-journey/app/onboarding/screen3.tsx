
// app/onboarding/screen3.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen3() {
  const router = useRouter();

  const handleFinishOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      router.navigate('/page/coursepage');
    } catch (error) {
      console.error('Error saving onboarding status', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/3.png')} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Track Your Progress</Text>
      <Text style={styles.description}>
        Visualize your achievements and stay motivated
      </Text>
      <TouchableOpacity 
        style={styles.getStartedButton}
        onPress={handleFinishOnboarding}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 15,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      color: '#cccccc',
      textAlign: 'center',
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
    },
    skipButton: {
      padding: 15,
      backgroundColor: 'transparent',
    },
    skipButtonText: {
      color: '#cccccc',
      fontSize: 16,
    },
    nextButton: {
      padding: 15,
      backgroundColor: '#4CAF50',
      borderRadius: 10,
    },
    nextButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    getStartedButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 10,
      marginTop: 20,
    },
    getStartedButtonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });