/* eslint-disale react-hooks/exhaustive-deps */
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import {Pokemon} from '../interfaces';
import {FadeInImage} from './ui/FadeImage';
import {capitalize} from '../utils/capitalize';

const windowWidth = Dimensions.get('window').width;
type Props = {
  pokemon: Pokemon;
};
export const PokemonCard = ({pokemon}: Props) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('Pokemon', {
            simplePokemon: pokemon,
            color: '#111111',
          })
        }>
        <Image
          resizeMode="cover"
          source={{uri: pokemon.image}}
          blurRadius={19}
          style={styles.imageBackground}
        />
        <View
          style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
          }}>
          <FadeInImage uri={pokemon.image} style={styles.pokemonImage} />
          <View style={styles.textContent}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Text style={styles.idPokemon}>{'#0' + pokemon.id}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    margin: 8,
    borderRadius: 8,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 190,
    width: 175,
    marginBottom: 25,
  },
  textContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  idPokemon: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.5,
  },
  imageBackground: {
    width: 150,
    height: 150,
    position: 'absolute',
    opacity: 0.5,
    top: -9,
    left: -5,
  },
  pokemonImage: {
    width: 143,
    height: 100,
  },
});
