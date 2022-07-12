import {StyleSheet} from 'react-native';
import COLORS from '../utils/colors';

export const pokemonDetailsTheme = StyleSheet.create({
  pokemonContent: {
    alignItems: 'center',
  },
  idPokemon: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  imageBlur: {
    width: 480,
    height: 480,
    position: 'absolute',
    opacity: 0.5,
    top: -250,
    left: -40,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'center',
  },
  pokemonImage: {
    width: 170,
    height: 170,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 20,
    alignItems: 'center',
  },
  textDescription: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal:20,
    color: COLORS.greyLight,
  },
  regularText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
  },
  chips: {
    marginVertical: 30,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  containChip: {
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 95,
    width: 71,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  type: {
    color: 'white',
    fontSize: 12,
  },
});