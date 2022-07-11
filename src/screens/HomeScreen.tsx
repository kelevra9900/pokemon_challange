/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Platform, FlatList} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {PokemonCard} from '../components/PokemonCard';
import {usePokemons} from '../hooks/usePokemons';
import {SearchInput} from '../components/SearchInput';
import {Loading} from '../components/ui/Loading';

const screenWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const {simplePokemonList, loadPokemons} = usePokemons();
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#111111',
      }}>
      <SearchInput
        style={{
          width: screenWidth - 51,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        style={{
          top: 100,
          marginHorizontal: 10,
        }}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon?.id?.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<Loading />}
      />
    </View>
  );
};
