// Import the necessary modules
import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

// Define a functional component called 'CustomInputField'
type Props = {
  label: string;
  placeholder?: string;
  isPassword?: boolean
};
const InputField = ({ label, placeholder, isPassword = false }:Props) => {
  // this function will handle the input text entered
  const handleTextChange = (text: string) => {
    console.log("➡️ text", text);
  };

  // Return a View component with the TextInput component and label as its children
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        secureTextEntry={isPassword}
        style={styles.input}
        placeholder={placeholder || "Enter text here ..."}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

// Define the styles for the input field
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

// Export the 'InputField' component as the default export
export default InputField;
