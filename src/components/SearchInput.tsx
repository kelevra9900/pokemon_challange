/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../assets/Icon/Search.svg';
import UserIcon from '../assets/Icon/User.svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  const navigation: any = useNavigation();

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.item}>
        <TouchableOpacity
          style={{margin: 6}}
          onPress={() => navigation.navigate('Search')}>
          <View style={{flexDirection: 'row'}}>
            <SearchIcon width={22} height={22} />
            <Text style={{color: '#828282', marginLeft: 4}}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <UserIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'center',
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#363636',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  item: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 6,
    height: 44,
    width: '100%',
  },
});
