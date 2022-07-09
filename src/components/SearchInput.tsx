import React, {useState} from 'react';
import {Platform, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SearchIcon from '../assets/Icon/Search.svg';
import UserIcon from '../assets/Icon/User.svg';

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
      <UserIcon height={40} width={40} />
      <View>
        <TextInput
          placeholder="Buscar..."
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          value={textValue}
          onChangeText={setTextValue}
        />
        <SearchIcon width={22} height={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 6,
    marginTop: 20,
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
