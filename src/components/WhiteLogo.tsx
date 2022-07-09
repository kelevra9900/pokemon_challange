import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../assets/logo.svg';

function WhiteLogo() {
  return (
    <View style={styles.container}>
      <Logo width={204} height={38} style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 12,
  },
});

export default WhiteLogo;
