/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {ListPokemon} from '../components/ListPokemon';

import {Loading} from '../components/ui/Loading';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {Pokemon} from '../interfaces/index';
// import SearchIcon from '../assets/Icon/Search.svg';
import {EmptySearch} from '../components/EmptySearch';
import COLORS from '../utils/colors';

export const SearchScreen = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<Pokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        (poke: Pokemon) => poke.id.toString() === term,
      );
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }
  const onChangeSearch = (query: string) => setTerm(query);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.searchContent}>
        <TextInput
          style={{width: term === '' ? '100%' : '84%', ...styles.searchInput}}
          placeholder="Search"
          onChangeText={(value: string) => onChangeSearch(value)}
          onSubmitEditing={() => {}}
          value={term}
        />
        {term === '' ? null : (
          <TouchableOpacity
            onPress={() => setTerm('')}
            style={styles.cancelContent}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      {term === '' ? (
        <EmptySearch />
      ) : (
        <FlatList
          data={pokemonFiltered}
          keyExtractor={pokemon => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          // Header
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: 12,
                paddingBottom: 10,
              }}>
              {term}
            </Text>
          }
          renderItem={({item}: any) => <ListPokemon pokemon={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#111111',
  },
  cancel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  searchContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 44,
    paddingHorizontal: 10,
    color: COLORS.black,
    marginTop: 10,
  },
  cancelContent: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
