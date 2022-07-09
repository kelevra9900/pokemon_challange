/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Platform,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SearchInput} from '../components/SearchInput';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemons} from '../hooks/usePokemons';

const screenWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const {simplePokemonList, loadPokemons} = usePokemons();
  const {top} = useSafeAreaInsets();
  console.log(term);
  console.log(loadPokemons);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111111',
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        style={{
          top: 120,
        }}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        // onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </View>
  );
};
