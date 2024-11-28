import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onPress, disabled, variant = 'solid', children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        variant === 'outline' ? styles.outline : styles.solid,
        disabled && styles.disabled
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === 'outline' ? styles.outlineText : styles.solidText
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {
    backgroundColor: '#007bff',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007bff',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  solidText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#007bff',
  },
  disabled: {
    opacity: 0.6,
  },
});
