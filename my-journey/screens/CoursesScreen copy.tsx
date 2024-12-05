import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from 'react-native';
import { fetchCourses, processCoursePurchase } from '../utils/courseService';
import { Course } from '../model/Course';
import { auth } from '../firebaseConfig';
import { useRouter } from 'expo-router';


const CoursesScreen = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch courses on component mount
  useEffect(() => {
    const unsubscribe = fetchCourses((fetchedCourses) => {
      setCourses(fetchedCourses);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Handle booking logic
  const handleBookCourse = async (course: Course) => {
    const user = auth.currentUser;
    console.log('Auth user:', user);
  
    if (!user) {
      Alert.alert(
        'Not Logged In',
        'Please log in to book a course.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Log In', onPress: () => router.push('/(tabs)/loginpage') },
        ]
      );
      return;
    }
  
   
    if (course.status === 'available') {
        try {
          const paymentDetails = {
            cardNumber: '4111222233334444', // Example card details
            expiryDate: '12/25',
            cvv: '123',
            amount: course.price
          };
       
          await processCoursePurchase(course.id!, auth.currentUser!.uid, paymentDetails);
          
          Alert.alert('Success', `You have booked ${course.name}`);
          // Optional: Navigate to purchased courses or dashboard
        } catch (error) {
          console.error("Booking failed:", error);
          Alert.alert('Error', 'Failed to book course. Please try again.');
        }
       }
  };
  

  // Render individual course item
  const renderCourseItem = ({ item }: { item: Course }) => (
    <View style={styles.courseContainer}>
      <Image
        source={{ uri: item.image || 'https://via.placeholder.com/150' }}
        style={styles.courseImage}
        resizeMode="cover"
      />
      <View style={styles.courseDetails}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.coursePrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={[
            styles.statusButton,
            item.status === 'available' ? styles.availableStatus : styles.bookedStatus,
          ]}
          onPress={() => handleBookCourse(item)}
          disabled={item.status === 'booked'}
        >
          <Text style={styles.statusText}>
            {item.status === 'available' ? 'Book Now' : 'Booked'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Show loader if data is still loading
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Loading Courses...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => router.push('/auth/dashboard')} style={styles.backButton}>
          <Text style={styles.backButtonText}>Dashboard</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Courses</Text>
      </View>

      {/* Course List */}
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id!}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No courses available</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1a1d21',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  courseContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  courseImage: {
    width: 120,
    height: 120,
  },
  courseDetails: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coursePrice: {
    fontSize: 16,
    color: '#888',
  },
  statusButton: {
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  availableStatus: {
    backgroundColor: '#4CAF50',
  },
  bookedStatus: {
    backgroundColor: '#ccc',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  loadingText: {
    color: '#fff',
    marginTop: 16,
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CoursesScreen;
