/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {usePokemon} from '../hooks/useSinglePokemon';
import {Pokemon} from '../interfaces';
import BackIcon from '../assets/Icon/Chevron-Left.svg';
import {FadeInImage} from '../components/ui/FadeImage';
import {PokemonDetails} from '../components/PokemonDetail';

export type RootParams = {
  HomeScreen: undefined;
  Pokemon: {simplePokemon: Pokemon; color: string};
};

interface Props extends StackScreenProps<RootParams, 'Pokemon'> {}

export const PokemonDetailScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id.toString());

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* Heade Containerr */}
      <View
        style={{
          backgroundColor: 'black',
        }}>
        {/* Backbutton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}>
          <BackIcon stroke={'white'} />
        </TouchableOpacity>

        <View style={styles.pokemonContent}>
          {/* Image in background */}
          <Image
            resizeMode="cover"
            source={{uri: simplePokemon.image}}
            blurRadius={25}
            style={styles.imageBlur}
          />
          {/* Pokemon Image */}
          <FadeInImage uri={simplePokemon.image} style={styles.pokemonImage} />
          {/* Pokemon Name */}
          <Text
            style={{
              ...styles.pokemonName,
              top: top + 24,
            }}>
            {name}
          </Text>
          {/* Pokemon ID */}
          <Text style={styles.idPokemon}>{'#0' + pokemon.id}</Text>
        </View>
      </View>

      {/* Detalles y Loading */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonContent: {
    alignItems: 'center',
  },
  idPokemon: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    alignItems: 'center',
  },
  imageBlur: {
    width: 480,
    height: 480,
    position: 'absolute',
    opacity: 0.5,
    top: -250,
    left: -40,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'center',
  },
  pokemonImage: {
    width: 250,
    height: 250,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
