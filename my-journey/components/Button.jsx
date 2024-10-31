// Import the necessary modules
import React from "react";
import { Pressable, Text, StyleSheet, Alert } from "react-native";

// Define a functional component called 'Button'
const Button = ({ name }) => {
  // Define the function to be called when the button is clicked
  function clicked() {
    Alert.alert("Button Click ✅");
  }

  // Return a Pressable component with the 'name' prop as its child
  return (
    <Pressable onPress={clicked} style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};

// Define the styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

// Export the 'Button' component as the default export
export default Button;
