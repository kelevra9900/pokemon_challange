import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';

import {AuthContext} from '../context/AuthContext';
import {Background} from '../components/Background';

export const ProfileScreen = () => {
  const {user, logOut} = useContext(AuthContext);
  const fullName = user?.name.split(' ');
  const initials =
    fullName?.shift()?.charAt(0) || '' + fullName?.pop()?.charAt(0) || '';

  return (
    <>
      <Background />
      <View style={styles.content}>
        <Avatar.Text size={100} label={initials} />
        <Text style={styles.text}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>

        <View>
          <TouchableOpacity onPress={() => logOut()}>
            <Text style={styles.signOut}>SignOut</Text>
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
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  email: {
    marginTop: 10,
    color: '#828282',
    fontSize: 16,
    fontWeight: '400',
  },
  signOut: {
    marginTop: 40,
    color: '#2F80ED',
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
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
