import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UpcomingTaskProps {}

const UpcomingTask: React.FC<UpcomingTaskProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <Text style={styles.taskTitle}>Upcoming Task</Text>
        <Text style={styles.taskDetails}>
          CS HW3{'\n'}
          11:59 pm
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.finishText}>Finish Task</Text>
        <Text style={styles.dismissText}>Dismiss</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 24,
    marginTop: 8,
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOpacity: 0.25,
  },
  taskInfo: {
    flexDirection: 'column',
    fontSize: 20,
    color: 'black',
  },
  taskTitle: {
    fontWeight: '600',
    textAlign: 'center',
  },
  taskDetails: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  actionContainer: {
    alignSelf: 'flex-end',
    marginTop: 28,
    fontSize: 14,
    textAlign: 'right',
  },
  finishText: {
    color: '#D1FAE5', // emerald-100 equivalent
  },
  dismissText: {
    color: '#FECACA', // rose-100 equivalent
    marginTop: 20,
    alignSelf: 'flex-end',
  },
});

export default UpcomingTask;

