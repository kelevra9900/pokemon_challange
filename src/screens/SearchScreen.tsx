import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {searchTheme as styles} from '../theme/searchTheme';
import {ListPokemon} from '../components/ListPokemon';
import {Loading} from '../components/ui/Loading';
import {EmptySearch} from '../components/EmptySearch';

import {Pokemon} from '../interfaces/index';

export interface RenderProps{
  item: Pokemon;
}
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
          renderItem={({item}: RenderProps) => <ListPokemon pokemon={item} />}
        />
      )}
    </SafeAreaView>
  );
};
