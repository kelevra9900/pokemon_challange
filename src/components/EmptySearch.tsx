import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const EmptySearch = () => {
  return (
    <View style={style.main}>
      <Icon name="search" size={90} color={'#4f4f4f'} />
      <View style={style.content}>
        <Text style={style.title}>Search</Text>
        <Text style={style.description}>
          Search pokemons by name or by number
        </Text>
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  title: {
    fontSize: 18,
    color: '#E0E0E0',
  },
  description: {
    fontSize: 16,
    color: '#828282',
  },
});
