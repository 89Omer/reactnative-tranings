import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
  // State to manage the toggle switches for settings
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Settings</Text>

      {/* Option 1: Enable/Disable Sound */}
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Enable Sound</Text>
        {/* Switch component for toggling sound */}
        <Switch
          value={isSoundEnabled}
          onValueChange={setIsSoundEnabled}
        />
      </View>

      {/* Option 2: Enable/Disable Notifications */}
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Enable Notifications</Text>
        {/* Switch component for toggling notifications */}
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    justifyContent: 'center', // Center content vertically
    //justifyContent: 'flex-start', // Align content at the top of the screen
    padding: 20, // Add some padding
    backgroundColor: '#f9f9f9', // Light background color
  },
  headerText: {
    fontSize: 24, // Large text for the header
    marginBottom: 20, // Add space below the header
    textAlign: 'center', // Center the header text
  },
  settingOption: {
    flexDirection: 'row', // Arrange the text and switch horizontally
    justifyContent: 'space-between', // Push items to the left and right
    alignItems: 'center', // Align items vertically in the center
    marginVertical: 10, // Add space between each setting option
  },
  optionText: {
    fontSize: 18, // Size for the setting labels
  },
});
