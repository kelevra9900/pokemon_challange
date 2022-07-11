/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {usePokemon} from '../hooks/useSinglePokemon';
import {FadeInImage} from '../components/ui/FadeImage';
import {PokemonDetails} from '../components/PokemonDetail';
import COLORS from '../utils/colors';
import {Loading} from '../components/ui/Loading';
import {ColorsType} from '../utils/color_types';

interface Props extends StackScreenProps<any, 'Pokemon'> {}

export const PokemonDetailScreen = ({route}: Props) => {
  const {simplePokemon, color} = route.params as any;
  const {id, name} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon, details, evolutions} = usePokemon(id.toString());
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* Head Containerr */}
      <View
        style={{
          backgroundColor: 'black',
          zIndex: 1,
        }}>
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
              top: top - 7,
            }}>
            {name}
          </Text>
        </View>
        {/* Chips type */}
        {isLoading ? (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator color={color} size={50} />
          </View>
        ) : (
          <>
            {/* Pokemon ID */}
            <Text style={styles.idPokemon}>{'#' + pokemon.id}</Text>
            <View style={styles.chips}>
              {pokemon.types.map(({type}) => (
                <View
                  key={type.name}
                  style={{
                    ...styles.containChip,
                    backgroundColor: ColorsType[type.name] || '#fff',
                    borderColor: ColorsType[type.name] || '#fff',
                  }}>
                  <Text style={styles.type}>{type.name}</Text>
                </View>
              ))}
            </View>
          </>
        )}
        {/* Pokemon Description */}
        <View style={styles.description}>
          <Text style={styles.textDescription}>{details}</Text>
        </View>
      </View>

      {/* Detalles y Loading */}
      {isLoading ? (
        <Loading />
      ) : (
        <PokemonDetails pokemon={pokemon} evolutions={evolutions} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pokemonContent: {
    alignItems: 'center',
  },
  idPokemon: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
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
    zIndex: 1,
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'center',
  },
  pokemonImage: {
    width: 170,
    height: 170,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 20,
    alignItems: 'center',
  },
  textDescription: {
    justifyContent: 'center',
    color: COLORS.greyLight,
  },
  regularText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  chips: {
    marginVertical: 6,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  containChip: {
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 95,
    width: 71,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  type: {
    color: 'white',
    fontSize: 12,
  },
});
