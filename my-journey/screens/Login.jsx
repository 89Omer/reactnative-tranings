import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {  // Add 'async' here
    setLoading(true);
    try {
      // Fake APIs
      let url1 = 'https://fakestoreapi.com/users';
      let url2 = 'https://jsonplaceholder.typicode.com/users';
  
    
      const response = await fetch(url2);
      const users = await response.json();

      // Find the user with the matching email
      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

      // Check if the user exists and the password matches
      //Use when you have a password
      //if (user && user.password === password) {}
      if (user) {
        // Successful login
        Alert.alert('Login successful');

        // Simulate storing auth token (implement proper token storage in production)
        await AsyncStorage.setItem('userToken', 'dummy-token');
        await AsyncStorage.setItem('userName', user.name);

        // Delay navigation briefly to show the alert
        setTimeout(() => {
          router.replace('/auth/dashboard');
        }, 1000);
      } else {
        // Invalid credentials case - show alert and stop further execution
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      // Handle network or unexpected errors
      Alert.alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const goToRegister = () => {
    router.replace('/auth/register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color:'white'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 5,
  },
  registerText: {
    color: '#666',
  },
  registerButton: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;