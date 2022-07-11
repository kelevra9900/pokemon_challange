/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import HeightIcon from '../assets/Icon/Height.svg';
import WeightIcon from '../assets/Icon/Weight.svg';
import {FadeInImage} from './ui/FadeImage';
import {DetailPokemon, Chain} from '../interfaces/index';

interface Props {
  pokemon: DetailPokemon;
  evolutions: Chain[];
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        {/* Detail */}
        <View style={styles.weightHeight}>
          <View style={{flexDirection: 'row'}}>
            <HeightIcon style={{margin: 5}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.regularText}>{pokemon.weight} lbs</Text>
              <Text style={styles.subtitle}>Weight</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <WeightIcon style={{margin: 5}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.regularText}>{pokemon.height}" ft</Text>
              <Text style={styles.subtitle}>Height</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Evolution images */}
      <View style={styles.container}>
        <Text style={styles.title}>Evolutions</Text>
      </View>

      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
      <View style={styles.contentEvo}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />

        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </View>
      {/* </ScrollView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 7,
  },
  weightHeight: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentEvo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
    height: 130,
    backgroundColor: 'rgba(44, 44, 44, 0.5)',
    borderColor: '#2c2c2c',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 20,
  },
  regularText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 12,
    color: '#828282',
    textAlign: 'center',
  },
  basicSprite: {
    width: 100,
    height: 65,
  },
});
