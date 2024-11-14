import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

//use this to install - expo install @react-native-async-storage/async-storage



const DashboardScreen = () => {
  const [name, setName] = useState('');
  const router = useRouter();


  useEffect(() => {
    // Load user name when component mounts
    getUserName();
  }, []);

  const getUserName = async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      if (userName !== null) {
        setName(userName);
      }
    } catch (error) {
      console.error('Error reading userName:', error);
    }
  };

  const handleLogout = async () => {
    try {
      // Clear all stored data
      await AsyncStorage.multiRemove(['userToken', 'userName']);
      router.replace('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const navigateToAlertScreen = () => {
    router.replace('/page/alertmessagepage');
  };
  const navigateToAnimationScreen = () => {
    router.replace('/page/animatedtextpage');
  };
  const navigateToKeybaordAdjustScreen = () => {
    router.push('/page/keyboardheightpage');
  };
  const navigateToPressableButtonScreen = () => {
    router.push('/page/pressablebuttonpage');
  };
  const navigateToRefreshAbleScreen = () => {
    router.push('/page/refreshablepage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DEMO UI PAGES</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToAlertScreen}>
          <Text style={styles.buttonText}>React Native Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToAnimationScreen}>
          <Text style={styles.buttonText}>React Native Animations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToKeybaordAdjustScreen}>
          <Text style={styles.buttonText}>React Native Keybaord Adjust</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToPressableButtonScreen}>
          <Text style={styles.buttonText}>React Native Pressable Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTile} onPress={navigateToRefreshAbleScreen}>
          <Text style={styles.buttonText}>React Native Refreshable</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Welcome {name}!</Text>
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