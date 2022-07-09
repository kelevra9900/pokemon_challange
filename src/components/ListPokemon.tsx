import React from 'react';
import {View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

import {Pokemon} from '../interfaces/index';

type Props = {
  pokemon: Pokemon;
};
export const ListPokemon = ({pokemon}: Props) => {
  return (
    <View>
      <List.Item
        style={styles.main}
        title={pokemon.name}
        description={pokemon.id.toString()}
        left={props => <List.Icon {...props} icon="folder" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    color: '#fff',
    backgroundColor: '#000',
  },
});
