import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ActivityCardProps {
  title: string;
  time: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, time }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>You spent...</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#D1D5DB', // zinc-300 equivalent
    borderRadius: 39,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOpacity: 0.25,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  subtitle: {
    marginTop: 28,
    fontSize: 16,
  },
  time: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 20,
  },
});

export default ActivityCard;

