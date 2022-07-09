/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {DetailPokemon} from '../interfaces';
import butcherApi from '../api';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<DetailPokemon>({} as DetailPokemon);

  const loadPokemon = async () => {
    const resp = await butcherApi.get<DetailPokemon>(
      `https://challenge.butchershop.co/api/v1/pokemons/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
