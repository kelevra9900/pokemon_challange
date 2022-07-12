import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <Image source={require('../../assets/pika_loader.gif')} />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    marginTop: 3,
  },
});
