/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import axios from 'axios';

import {DetailPokemon, FlavorTextEntry} from '../interfaces';
import butcherApi from '../api';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<DetailPokemon>({} as DetailPokemon);
  const [details, setDetails] = useState('');

  const loadPokemon = async () => {
    const resp = await butcherApi.get<DetailPokemon>(
      `https://challenge.butchershop.co/api/v1/pokemons/${id}`,
    );
    const moreDetails = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    );
    if (moreDetails.data) {
      moreDetails.data.flavor_text_entries.forEach((entry: FlavorTextEntry) => {
        if (entry.language.name === 'en') {
          setDetails(entry.flavor_text);
        }
      });
    }

    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    details,
    pokemon,
  };
};
