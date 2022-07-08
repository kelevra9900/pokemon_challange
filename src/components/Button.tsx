import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ButtonComponent() {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
