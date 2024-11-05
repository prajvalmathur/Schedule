import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

interface MenuProps {
  onNavigate: (route: string) => void;
}

const menuItems = [
  { label: 'Home', route: 'home' },
  { label: 'Calendar', route: 'calendar' },
  { label: 'Account Settings', route: 'accountSettings' },
  { label: 'General Settings', route: 'generalSettings' },
  { label: 'Log Out', route: 'logOut' },
];

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/c79db9b0934a4b67a5d975841b63119f/dd626893837d644860d739ca2b8be280d805d02db93b4186e12704d1be365de6?apiKey=c79db9b0934a4b67a5d975841b63119f&" }}
        style={styles.headerImage}
        accessibilityLabel="Menu header image"
      />
      <ScrollView style={styles.scrollView}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.route}
            label={item.label}
            onPress={() => onNavigate(item.route)}
            //style={index > 0 ? styles.menuItemWithMargin : undefined} // Pass the margin style correctly
          />
        ))}
        <MenuItem
          label="Back"
          onPress={() => onNavigate('back')}
          //style={styles.backItem} // Pass the back item style correctly
        />
      </ScrollView>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    paddingBottom: 5,
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: 480,
    textAlign: 'center',
  },
  headerImage: {
    width: '100%',
    aspectRatio: 4.98,
    objectFit: 'contain', // Use objectFit for image styling
  },
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 20,
    marginTop: 16,
    width: '100%',
  },
  menuItemWithMargin: {
    marginTop: 12,
  },
  backItem: {
    alignSelf: 'flex-end',
    marginTop: 96,
    fontSize: 20,
  },
});

export default Menu;


