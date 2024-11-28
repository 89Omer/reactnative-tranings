import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const DashboardScreen = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        // Try to get name from Firebase user or database
        setName(currentUser.displayName || currentUser.email.split('@')[0]);
      } else {
        // No user is signed in, redirect to login
        router.replace('/');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Navigation to login screen is handled by onAuthStateChanged
    } catch (error) {
      Alert.alert('Logout Error', error.message);
    }
  };

  const navigateToAlertScreen = () => {
    router.push('/page/alertmessagepage');
  };
  const navigateToAnimationScreen = () => {
    router.push('/page/animatedtextpage');
  };
  const navigateToKeyboardAdjustScreen = () => {
    router.push('/page/keyboardheightpage');
  };
  const navigateToPressableButtonScreen = () => {
    router.push('/page/pressablebuttonpage');
  };
  const navigateToRefreshableScreen = () => {
    router.push('/page/refreshablepage');
  };
  const navigateToMyProfileScreen = () => {
    router.push('/auth/profile');
    };
  // Render null if no user to prevent UI flash
  if (!user) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DEMO UI PAGES</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={navigateToMyProfileScreen}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToAlertScreen}>
          <Text style={styles.buttonText}>React Native Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToAnimationScreen}>
          <Text style={styles.buttonText}>React Native Animations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToKeyboardAdjustScreen}>
          <Text style={styles.buttonText}>React Native Keyboard Adjust</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToPressableButtonScreen}>
          <Text style={styles.buttonText}>React Native Pressable Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToRefreshableScreen}>
          <Text style={styles.buttonText}>React Native Refreshable</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Welcome to My Journey {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonTile: {
    width: '30%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DashboardScreen;