import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import {Pokemon} from '../interfaces/index';

type Props = {
  pokemon: Pokemon;
};

type StackParam = {
  Pokemon: { simplePokemon: Pokemon, color: string };
}

type NavigationProps = StackNavigationProp<StackParam>

export const ListPokemon = ({pokemon}: Props) => {
  const navigation = useNavigation<NavigationProps>();

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const zeroFilled = (value: string) => {
    const zeroes = new Array(3).join('0');
    return (zeroes + value).slice(-3);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.main}
        onPress={() =>
          navigation.navigate('Pokemon', {
            simplePokemon: pokemon,
            color: '#111111',
          })
        }>
        <Image source={{uri: pokemon.image}} style={styles.imagePokemon} />
        <View>
          <Text style={styles.title}>{capitalize(pokemon.name)}</Text>
          <Text style={styles.description}>
            # {zeroFilled(pokemon.id.toString())}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  description: {
    color: '#828282',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  imagePokemon: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
});
