import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/2.png')} 
        style={styles.image} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Set Your Goals</Text>
      <Text style={styles.description}>
        Create and track your personal and professional objectives
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/onboarding/screen3')}
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