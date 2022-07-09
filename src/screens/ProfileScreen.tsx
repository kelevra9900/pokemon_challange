import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {Background} from '../components/Background';

export const ProfileScreen = () => {
  const {user} = useContext(AuthContext);
  console.log('USUARIO', user);
  return (
    <>
      <Background />
      <View style={styles.content}>
        <View>
          <TouchableOpacity>
            <Text>Nombre de usuario</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 45,
  },
});
