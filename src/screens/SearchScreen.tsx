/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ListPokemon} from '../components/ListPokemon';
import {InputComponent} from '../components/ui/Input';

import {Loading} from '../components/ui/Loading';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {Pokemon} from '../interfaces/index';
import SearchIcon from '../assets/Icon/Search.svg';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<Pokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    console.log(isNaN(Number(term)));

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
    <View style={styles.main}>
      <View style={styles.searchInput}>
        <InputComponent
          placeholder="Search"
          placeholderTextColor="#828282"
          styles={{width: term === '' ? '100%' : '84%'}}
          autoCorrect={false}
          value={term}
          onChangeText={onChangeSearch}
          icon={<SearchIcon width={22} height={22} />}
        />
        {term === '' ? null : (
          <TouchableOpacity onPress={() => setTerm('')}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      {term === '' ? (
        <Text>Search pokemons by name or by number</Text>
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
                paddingBottom: 10,
                marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              }}>
              {term}
            </Text>
          }
          renderItem={({item}: any) => <ListPokemon pokemon={item} />}
        />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 16,
  },
  cancel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
