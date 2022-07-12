import {useState, useEffect} from 'react';
import axios, { AxiosError } from 'axios';

import {
  DetailPokemon,
  EvolutionDetail,
  FlavorTextEntry,
  GetEvo,
  Evo,
  Chain,
} from '../interfaces';
import butcherApi from '../api';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<DetailPokemon>({} as DetailPokemon);
  const [evolutions, setEvolutions] = useState<Evo[]>([]);
  const [details, setDetails] = useState('');

  const loadPokemon = async () => {
    try{
      const resp = await butcherApi.get<DetailPokemon>(
        `https://challenge.butchershop.co/api/v1/pokemons/${id}`,
      );
      const moreDetails = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      );
  
      let evolutionsInfo: any;
      if (moreDetails.data) {
        evolutionsInfo = await axios.get<EvolutionDetail>(
          `${moreDetails.data.evolution_chain.url}`,
        );
        moreDetails.data.flavor_text_entries.forEach((entry: FlavorTextEntry) => {
          if (entry.language.name === 'en') {
            setDetails(entry.flavor_text);
          }
        });
      }
        
      let firstEvoName: string | undefined;
      let secondEvoName: string | undefined;
      let thirdEvoName: string | undefined;

      if (evolutionsInfo.data) {
        firstEvoName = evolutionsInfo.data.chain.species.name;
        if (evolutionsInfo.data.chain.evolves_to.length > 0) {
          evolutionsInfo.data.chain.evolves_to.map((evolution: Chain) => {
            secondEvoName = evolution.species.name;
            if (evolution.evolves_to.length > 0) {
              evolution.evolves_to.map(evo => {
                thirdEvoName = evo.species.name;
              });
            }
          });
        }
      }

      let image1: string | undefined;
      let image2: string | undefined;
      let image3: string | undefined;

      if (firstEvoName) {
        const data1 = await axios.get<GetEvo[]>(
          `https://pokeapi.glitch.me/v1/pokemon/${firstEvoName}`,
        );
        image1 = data1.data[0].sprite;
      }
      if (secondEvoName) {
        const data2 = await axios.get<GetEvo[]>(
          `https://pokeapi.glitch.me/v1/pokemon/${secondEvoName}`,
        );
        image2 = data2.data[0].sprite;
      }
      if (thirdEvoName) {
        const data3 = await axios.get<GetEvo[]>(
          `https://pokeapi.glitch.me/v1/pokemon/${thirdEvoName}`,
        );
        image3 = data3.data[0].sprite;
      }

      const evoExtract: Evo[] = [];

      if (firstEvoName && image1) {
        evoExtract.push({
          name: firstEvoName,
          url: evolutionsInfo.data.chain.species.url,
          image: image1,
        });
      }
      if (secondEvoName && image2) {
        evoExtract.push({
          name: secondEvoName,
          url: evolutionsInfo.data.chain.evolves_to[0].species.url,
          image: image2,
        });
      }
      if (thirdEvoName && image3) {
        evoExtract.push({
          name: thirdEvoName,
          url: evolutionsInfo.data.chain.evolves_to[0].evolves_to[0].species
            .url,
          image: image3,
        });
      }
      
    setEvolutions(evoExtract);
    setPokemon(resp.data);
    setIsLoading(false);

    }catch(e){
      const err = e as AxiosError;
      setIsLoading(false);
      console.log('ERRRORRRR::>:>:>:>:>:>', err.response?.data);
      console.log('ERRRORRRR::>:>:>:>:>:>', err.response?.headers);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    details,
    pokemon,
    evolutions,
  };
};
