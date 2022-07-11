/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {usePokemon} from '../hooks/useSinglePokemon';
import {FadeInImage} from '../components/ui/FadeImage';
import {PokemonDetails} from '../components/PokemonDetail';
import {Loading} from '../components/ui/Loading';
import {pokemonDetailsTheme as styles} from '../theme/pokemonDetailTheme';

import {ColorsType} from '../utils/color_types';
import {capitalize} from '../utils/capitalize';

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
            {capitalize(name)}
          </Text>
        </View>
        {/* Chips type */}
        {isLoading ? (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator color={color} size={50} />
          </View>
        ) : (
          <View style={{flex: 1, top: top + 2}}>
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
          </View>
        )}
        {/* Pokemon Description */}
        <View style={{...styles.description, top: top + 30}}>
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
