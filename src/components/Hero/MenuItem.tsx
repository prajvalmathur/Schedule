import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuItemProps {
  label: string;
  onPress: () => void;
  style?: object; // Use style instead of className
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} accessibilityRole="button">
      <Text style={[styles.menuItemText, style]}>{label}</Text> {/* Apply default and custom styles */}
    </TouchableOpacity>
  );
};

// Define your styles
const styles = StyleSheet.create({
  menuItemText: {
    fontSize: 18, // Default font size, adjust as needed
    color: 'black', // Default text color, adjust as needed
  },
});

export default MenuItem;
