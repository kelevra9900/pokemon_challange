import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Background = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#111111',
    top: -250,
    width: 1000,
    height: 1200,
  },
});
