import React from 'react';
import {View, Text, Image, SafeAreaView, ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';

import {usePokemon} from '../hooks/useSinglePokemon';
import {FadeInImage} from '../components/ui/FadeImage';
import {PokemonDetails} from '../components/PokemonDetail';
import {Loading} from '../components/ui/Loading';
import {pokemonDetailsTheme as styles} from '../theme/pokemonDetailTheme';

import {Colorsprops, ColorsType} from '../utils/color_types';
import {capitalize} from '../utils/capitalize';
import { Pokemon } from '../interfaces';

type Props = StackScreenProps<any, 'Pokemon'>

type ParamsProps ={
  simplePokemon: Pokemon;
  color: string
}
export const PokemonDetailScreen = ({route}: Props) => {
  const {simplePokemon, color} = route.params as ParamsProps;
  const {id, name} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon, details, evolutions} = usePokemon(id.toString());

  console.log('pokemon', pokemon);
  console.log('details', details);
  console.log('evolutions', evolutions);
  console.log('isLoading', isLoading);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* Head Containerr */}
      <ScrollView
            style={{
              ...StyleSheet.absoluteFillObject,
            }}>
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
            <ActivityIndicator color='#ffff' size={25} />
          </View>
        ) : (
          <View style={{top: top + 2}}>
            {/* Pokemon ID */}
            <Text style={styles.idPokemon}>{'#' + simplePokemon.id}</Text>
            <View style={styles.chips}>
              {pokemon?.types?.map(({type}) => (
                <View
                  key={type.name}
                  style={{
                    ...styles.containChip,
                    backgroundColor: ColorsType[type.name as keyof Colorsprops] || '#fff',
                    borderColor: ColorsType[type.name as keyof Colorsprops] || '#fff',
                  }}>
                  <Text style={styles.type}>{capitalize(type.name)}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        {/* Pokemon Description */}
        <View style={{...styles.description, top: top - 29}}>
          <Text style={styles.textDescription}>{details}</Text>
        </View>
      </View>

      {/* Detalles y Loading */}
      {isLoading ? (
        <Loading />
      ) : (
        <PokemonDetails pokemon={pokemon} evolutions={evolutions} />
      )}
      </ScrollView>
    </SafeAreaView>
  );
};
