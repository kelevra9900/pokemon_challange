import {useEffect, useRef, useState} from 'react';
import {PokemonsResponse, Pokemon} from '../interfaces';
import restApi from '../api';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([]);
  const url = useRef(
    'https://challenge.butchershop.co/api/v1/pokemons?limit=40',
  );

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await restApi.get<PokemonsResponse>(url.current);
    let api = 'https://challenge.butchershop.co/api/v1/pokemons';
    const newUrl: string = resp.data.next.replace(
      'https://pokeapi.co/api/v2/pokemon',
      '',
    );
    api += newUrl;
    url.current = api;
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
