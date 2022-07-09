/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../assets/Icon/Search.svg';
import UserIcon from '../assets/Icon/User.svg';
import {InputComponent} from './ui/Input';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

type mainScreenProp = StackNavigationProp<any, 'Main'>;
interface Props {
  onDebounce?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style, onDebounce}: Props) => {
  const navigation = useNavigation<mainScreenProp>();
  const [textValue, setTextValue] = useState('');

  const deboncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    if (onDebounce) {
      onDebounce(deboncedValue);
    }
  }, [deboncedValue]);

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.item}>
        <InputComponent
          placeholder="Search"
          placeholderTextColor="#828282"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
          onSubmitEditing={() => navigation.navigate('Search')}
          icon={<SearchIcon width={22} height={22} />}
        />
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#363636',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    top: Platform.OS === 'ios' ? 17 : 0,
  },
  item: {
    height: 20,
    width: '100%',
  },
});
