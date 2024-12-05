import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { markOnboardingComplete } from '@/utils/onboardingStorage'; // Adjust the path as needed

export default function OnboardingScreen1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/1.png')} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Your Journey</Text>
      <Text style={styles.description}>
        Track your personal growth and achievements with ease
      </Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
        style={styles.skipButton}
        onPress={async () => {
          await markOnboardingComplete(); // Mark onboarding as complete
          router.replace('/(auth)/login'); // Redirect to login
        }}
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/onboarding/screen2')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
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