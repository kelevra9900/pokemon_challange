/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import butcherApi from '../api';

import {PokemonsResponse, Pokemon} from '../interfaces/';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([]);

  const loadPokemons = async () => {
    const resp = await butcherApi.get<PokemonsResponse>(
      'https://challenge.butchershop.co/api/v1/pokemons',
    );
    setSimplePokemonList(resp.data.results);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemonList,
  };
};
