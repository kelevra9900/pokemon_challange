import React, {useState} from 'react';
import {View, Dimensions, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SearchInput} from '../components/SearchInput';

const screenWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const {top} = useSafeAreaInsets();
  console.log(term);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
    </View>
  );
};
