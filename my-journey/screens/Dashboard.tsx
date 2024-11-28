import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const DashboardScreen = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || currentUser.email.split('@')[0]);
      } else {
        router.replace('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert('Logout Error', error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation Functions
  const navigateToAlertScreen = () => router.push('/page/alertmessagepage');
  const navigateToAnimationScreen = () => router.push('/page/animatedtextpage');
  const navigateToKeyboardAdjustScreen = () => router.push('/page/keyboardheightpage');
  const navigateToPressableButtonScreen = () => router.push('/page/pressablebuttonpage');
  const navigateToRefreshableScreen = () => router.push('/page/refreshablepage');
  const navigateToMyProfileScreen = () => router.push('/auth/profile');

  if (!user) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, {name}!</Text>
        <TouchableOpacity style={styles.hamburger} onPress={toggleMenu}>
          <Text style={styles.hamburgerText}>{isMenuOpen ? 'Close Menu' : 'Menu'}</Text>
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToMyProfileScreen}>
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
          <Text style={styles.menuCategory}>Demo Pages</Text>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToAlertScreen}>
            <Text style={styles.menuItemText}>React Native Alerts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToAnimationScreen}>
            <Text style={styles.menuItemText}>React Native Animations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToKeyboardAdjustScreen}>
            <Text style={styles.menuItemText}>React Native Keyboard Adjust</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToPressableButtonScreen}>
            <Text style={styles.menuItemText}>React Native Pressable Button</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToRefreshableScreen}>
            <Text style={styles.menuItemText}>React Native Refreshable</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
  },
  hamburger: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  hamburgerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  menuCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DashboardScreen;
