import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

type Props = {
  onPress: () => void;
  testID?: string;
};

export const Button = ({onPress, testID}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} testID={testID}>
        <Text style={styles.text}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#2F80ED',
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#2F80ED',
    textDecorationLine: 'underline',
  },
});
