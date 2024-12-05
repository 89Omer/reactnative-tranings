import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image  } from 'react-native';
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
        router.replace('/(tabs)/loginpage');
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
// Assuming you have image sources for these:
  const bannerImage = require('../assets/images/Banner.png'); // Replace with your image path
  const featuredCourseImage1 = require('../assets/images/1.png'); // Replace with your image path
  const featuredCourseImage2 = require('../assets/images/2.png'); // Replace with your image path

  // Navigation Functions
  const navigateToAlertScreen = () => router.push('/page/alertmessagepage');
  const navigateToAnimationScreen = () => router.push('/page/animatedtextpage');
  const navigateToKeyboardAdjustScreen = () => router.push('/page/keyboardheightpage');
  const navigateToPressableButtonScreen = () => router.push('/page/pressablebuttonpage');
  const navigateToRefreshableScreen = () => router.push('/page/refreshablepage');
  const navigateToMyProfileScreen = () => router.push('/auth/profile');
  const navigateToMyCourses = () => router.push('/page/coursepage');
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
          <TouchableOpacity style={styles.menuItem} onPress={navigateToMyCourses}>
            <Text style={styles.menuItemText}>Featured Courses</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView style={styles.content}>
        <Image 
        source={require('@/assets/images/Banner.png')} 
        style={styles.bannerImage} 
        resizeMode="cover"
      />

        {/* Exciting Offers Section */}
        <View style={styles.offersSection}>
          <Text style={styles.offersTitle}>Exciting Offers!</Text>
          <Text style={styles.offersText}>
            - Get 10% off your first course enrollment!
            {'\n'}
            - Limited-time discounts on popular courses.
            {'\n'}
            - Check your inbox for exclusive offers!
          </Text>
        </View>

        {/* Featured Courses Section */}
        <View style={styles.featuredCoursesSection}>
          <Text style={styles.featuredCoursesTitle}>Featured Courses</Text>
          <View style={styles.featuredCourseItem}>
            <Image source={featuredCourseImage1} style={styles.featuredCourseImage} />
            <Text style={styles.featuredCourseTitle}>Course 1 Title</Text>
            <Text style={styles.featuredCourseDescription}>
              Brief description of course 1.
            </Text>
          </View>
          <View style={styles.featuredCourseItem}>
            <Image source={featuredCourseImage2} style={styles.featuredCourseImage} />
            <Text style={styles.featuredCourseTitle}>Course 2 Title</Text>
            <Text style={styles.featuredCourseDescription}>
              Brief description of course 2.
            </Text>
          </View>
        </View>

        {/* Informative Text Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Learn More About Us</Text>
          <Text style={styles.infoText}>
            This dashboard provides a comprehensive overview of the courses we offer. You can explore a wide range of topics, from beginner to advanced levels. Stay tuned for exciting updates and new course offerings!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles2 = StyleSheet.create({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  content: {
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  offersSection: {
    marginBottom: 20,
  },
  offersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offersText: {
    fontSize: 16,
  },
  featuredCoursesSection: {
    marginBottom: 20,
  },
  featuredCoursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredCourseItem: {
    marginBottom: 20,
  },
  featuredCourseImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  featuredCourseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredCourseDescription: {
    fontSize: 14,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
  },
});

export default DashboardScreen;
