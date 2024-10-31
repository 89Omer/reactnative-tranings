// Import the necessary modules
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/Button";
import InputField from "../components/InputField";

// Define a functional component called 'LoginScreen'
const LoginScreen = () => {
  // Return a View component with the heading, input fields, and button as its children
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Login Screen</Text>

      <InputField 
        label={"Email"} 
        placeholder={"Enter your email address"} 
        />

      <InputField
        label={"Password"}
        isPassword
        placeholder={"Enter your password"}
      />

      <Button name={"Login"} />
    </View>
  );
};

// Define the styles for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
});

// Export the 'LoginScreen' component as the default export
export default LoginScreen;
