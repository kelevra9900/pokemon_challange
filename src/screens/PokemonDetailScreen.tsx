/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {usePokemon} from '../hooks/useSinglePokemon';
// import BackIcon from '../assets/Icon/Chevron-Left.svg';
import {FadeInImage} from '../components/ui/FadeImage';
import {PokemonDetails} from '../components/PokemonDetail';

interface Props extends StackScreenProps<any, 'Pokemon'> {}

export const PokemonDetailScreen = ({route, navigation}: Props) => {
  const {simplePokemon, color} = route.params as any;
  const {id, name} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id.toString());

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {/* Head Containerr */}
      <View
        style={{
          backgroundColor: 'black',
          zIndex: 1,
        }}>
        {/* Backbutton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top - 58,
          }}>
          <Icon name="angle-left" size={37} color="#BDBDBD" />
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
              top: top - 49,
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
});
