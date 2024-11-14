import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const RefreshableList = () => {
  const [albums, setAlbums] = useState([]); // Stores album data
  const [refreshing, setRefreshing] = useState(false);
  const [additionalRecords, setAdditionalRecords] = useState(0); // Increment by 1 on each refresh

  // Fetch albums
  const fetchAlbums = async (limit) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`);
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  // Initial fetch of 3 records
  useEffect(() => {
    fetchAlbums(3);
  }, []);

  // Refresh to fetch additional records
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setAdditionalRecords((prev) => prev + 1); // Increment additional records count

    // Fetch new data with updated limit
    fetchAlbums(1 + additionalRecords + 1).finally(() => setRefreshing(false));
  }, [additionalRecords]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView} // Use flex: 1 here for full scroll
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* Display album data */}
          {albums.map((album) => (
            <View key={album.id} style={styles.albumContainer}>
              <Text style={styles.albumText}>{album.title}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#316ff6',
  },
  scrollView: {
    flex: 1, // Allow ScrollView to take full screen height
  },
  contentContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  albumContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  albumText: {
    fontSize: 16,
    color: '#333',
  },
});

export default RefreshableList;
