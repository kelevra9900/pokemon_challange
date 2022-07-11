/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {PokemonCard} from '../components/PokemonCard';
import {usePokemons} from '../hooks/usePokemons';
import {Loading} from '../components/ui/Loading';

export const HomeScreen = () => {
  const {simplePokemonList, loadPokemons} = usePokemons();

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#111111',
        flex: 1,
      }}>
      <FlatList
        data={simplePokemonList}
        testID="pokemon-list"
        keyExtractor={pokemon => pokemon?.id?.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<Loading />}
      />
    </SafeAreaView>
  );
};
