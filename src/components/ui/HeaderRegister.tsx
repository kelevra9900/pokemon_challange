import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const HeaderRegister = () => {
  return (
    <View style={styles.header}>
      {/* Back button icon */}
      <View>
        <Text style={styles.headerText}>Create an account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    color: '#ffffff',
  },
});
