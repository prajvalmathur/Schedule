import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface StatusCardProps {}

const StatusCard: React.FC<StatusCardProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>You are currently...</Text>
        <Text style={styles.statusText}>
          65% Tasks Completed{'\n'}
          25% To Be Completed{'\n'}
          5% Missed Tasks
        </Text>
      </View>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/c79db9b0934a4b67a5d975841b63119f/5be2f1a90d74fe506f3e177748153147a7b65247e6009093b2bb8acb1d0903df?apiKey=c79db9b0934a4b67a5d975841b63119f&',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingRight: 4,
    paddingLeft: 28,
    marginTop: 20,
    maxWidth: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 24,
    shadowOpacity: 0.1,
    width: 378,
  },
  textContainer: {
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  statusText: {
    marginTop: 8,
    fontSize: 16,
  },
  image: {
    resizeMode: 'contain',
    width: 124,
    aspectRatio: 1,
    marginTop: 14,
  },
});

export default StatusCard;

