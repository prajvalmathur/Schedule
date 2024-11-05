import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import StatusCard from './StatusCard';
import UpcomingTask from './UpcomingTask';
import ActivityCard from './ActivityCard';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const activities = [
    { title: 'Academics', time: '7 Hrs & 55 mins' },
    { title: 'Extra-Curricular', time: '7 Hrs & 55 mins' },
    { title: 'Work', time: '7 Hrs & 55 mins' },
    { title: 'Free-Time', time: '7 Hrs & 55 mins' },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/c79db9b0934a4b67a5d975841b63119f/3222706cffdfed1250cd955819513123bdf0162de31099785eb2053ccc0dcaf1?apiKey=c79db9b0934a4b67a5d975841b63119f&',
        }}
        style={styles.image}
      />
      <StatusCard />
      <UpcomingTask />
      <View style={styles.activitiesContainer}>
        {activities.slice(0, 2).map((activity, index) => (
          <ActivityCard key={index} title={activity.title} time={activity.time} />
        ))}
      </View>
      <View style={styles.activitiesContainer}>
        {activities.slice(2).map((activity, index) => (
          <ActivityCard key={index} title={activity.title} time={activity.time} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 16,
    marginHorizontal: 'auto',
    width: '100%',
    backgroundColor: 'white',
    maxWidth: 480,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'stretch',
    width: '100%',
    aspectRatio: 4.98,
  },
  activitiesContainer: {
    flexDirection: 'row',
    gap: 6, // Note: 'gap' is not directly supported in React Native; use margins if needed
    marginTop: 14,
    width: '100%',
    maxWidth: 388,
    fontSize: 20,
    color: 'black',
  },
});

export default MyComponent;

