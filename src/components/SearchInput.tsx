import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import SearchIcon from '../assets/Icon/Search.svg';
import UserIcon from '../assets/Icon/User.svg';
import {InputComponent} from './ui/Input';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({style}: Props) => {
  const [textValue, setTextValue] = useState('');

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
          value={textValue}
          icon={<SearchIcon width={22} height={22} />}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
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
