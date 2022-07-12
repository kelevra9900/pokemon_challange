import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { themePokeComponent as styles } from '../screens/PokeComponent';
import HeightIcon from '../assets/Icon/Height.svg';
import WeightIcon from '../assets/Icon/Weight.svg';
import {FadeInImage} from './ui/FadeImage';
import {DetailPokemon, Evo} from '../interfaces/index';
import {capitalize} from '../utils/capitalize';

interface Props {
  pokemon: DetailPokemon;
  evolutions: Evo[];
}

export const PokemonDetails = ({pokemon, evolutions}: Props) => {
  return (
    <View>
      <View
        style={{
          ...styles.container,
          marginTop: 14,
        }}>
        {/* Detail */}
        <View style={styles.weightHeight}>
          <View style={{flexDirection: 'row'}}>
            <HeightIcon />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.regularText}>{pokemon.weight} lbs</Text>
              <Text style={styles.subtitle}>Weight</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <WeightIcon style={{margin: 5}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.regularText}>{pokemon.height} ft</Text>
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
        {evolutions.map((evo, index) => (
          <View key={index}>
            <FadeInImage uri={evo.image} style={styles.basicSprite} />
            <Text style={styles.evoName}>{capitalize(evo.name)}</Text>
          </View>
        ))}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};