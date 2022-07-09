/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {PokemonsResponse, Pokemon} from '../interfaces';
import restApi from '../api';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([]);
  // const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const url = useRef('https://challenge.butchershop.co/api/v1/pokemons');

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await restApi.get<PokemonsResponse>(url.current);
    url.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Pokemon[]) => {
    const newPokemonList: Pokemon[] = pokemonList.map(({name, detailsUrl}) => {
      const urlParts = detailsUrl.split('/');
      const id: string = urlParts[urlParts.length - 2];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, image, name, detailsUrl};
    });

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    simplePokemonList,
    loadPokemons,
  };
};
